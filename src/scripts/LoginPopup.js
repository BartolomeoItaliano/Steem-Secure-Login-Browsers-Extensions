import * as steem from "steem";
import * as ext from "./utils/ext";
import {PrivateDataModel} from "./PrivateDataModel";
import {PrivateDataManager} from "./PrivateDataManager";

export class LoginPopup {

  constructor() {
    this.loginInput = document.getElementById("steemLoginInput");
    this.steemPasswordInput = document.getElementById("steemPasswordOrWIFInput");
    this.loginForm = document.getElementById("loginForm");
    this.logoutForm = document.getElementById("logoutForm");
    this.signUpButton = document.getElementById("signUpButton");
    this.loginButton = document.getElementById("loginButton");
    this.cancelLoginPopup = document.getElementById("cancelLoginPopup");
    this.logoutOnThisPageButton = document.getElementById("logoutOnThisPageButton");
    this.logoutEverywhereButton = document.getElementById("logoutEverywhereButton");
    this.initializePopupListeners();
    this.initializePopup();
  }

  login() {
    let login = this.loginInput.value;
    let passwordOrWIF = this.steemPasswordInput.value;
    let publicKeys = {};
    let privateDataModel = new PrivateDataModel(login);

    steem.api.getAccounts([login], function (err, res) {
      publicKeys.active = res[0].active.key_auths[0][0];
      publicKeys.posting = res[0].posting.key_auths[0][0];
      publicKeys.owner = res[0].owner.key_auths[0][0];
      publicKeys.memo = res[0].memo_key;

      if (steem.auth.isWif(passwordOrWIF)) {
        if (steem.auth.wifIsValid(passwordOrWIF, publicKeys.active)) {
          privateDataModel.activeKey = passwordOrWIF;
        }
        else if (steem.auth.wifIsValid(passwordOrWIF, publicKeys.posting)) {
          privateDataModel.postingKey = passwordOrWIF;
        }
        else if (steem.auth.wifIsValid(passwordOrWIF, publicKeys.memo)) {
          privateDataModel.memoKey = passwordOrWIF;
        }
        else if (steem.auth.wifIsValid(passwordOrWIF, publicKeys.owner)) {
          console.error("Keep your owner key safe and do not ever show it again");
          return;
        }
        else {
          console.error("You've typed wrong WIF");
          return;
        }
      }
      else {
        let privateKeys = steem.auth.getPrivateKeys(login, passwordOrWIF);
        privateDataModel.activeKey = privateKeys.active;
        privateDataModel.postingKey = privateKeys.posting;
        privateDataModel.memoKey = privateKeys.memo;
        if (steem.auth.wifIsValid(privateDataModel.activeKey, publicKeys.active) &&
          steem.auth.wifIsValid(privateDataModel.postingKey, publicKeys.posting) &&
          steem.auth.wifIsValid(privateDataModel.memoKey, publicKeys.memo)) {
        }
        else {
          console.error("You've typed wrong password.");
          return;
        }
      }
      PrivateDataManager.setPrivateDataForDomain(privateDataModel, () => {
        this.sendMessageWithParams("UserLoggedIn", {login: login});
        this.showLogoutForm();
      });
    }.bind(this));
  }


  logoutOnThisPage() {
    this.sendMessageWithParams("UserLoggedOut");
    PrivateDataManager.removePrivateDataForDomain(() => {
      this.showLoginForm();
    });
  }

  logoutEverywhere() {
    this.sendMessageWithParams("UserLoggedOut");
    PrivateDataManager.clearAllPrivateData();
    this.showLoginForm();
  }

  /**
   * @private
   */
  initializePopupListeners() {
    this.signUpButton.addEventListener("click", function () {
      window.open('https://signup.steemit.com/', '_blank');
    });

    this.cancelLoginPopup.addEventListener("click", function () {
      window.close();
    });

    this.logoutOnThisPageButton.addEventListener("click", function () {
      this.logoutOnThisPage();
    }.bind(this));

    this.logoutEverywhereButton.addEventListener("click", function () {
      this.logoutEverywhere();
    }.bind(this));

    this.loginButton.addEventListener("click", function (event) {
      event.preventDefault();
      this.login();
    }.bind(this));
  }

  /**
   * @private
   */
  initializePopup() {
    PrivateDataManager.getPrivateDataForDomain((privateDataModel) => {
      if (privateDataModel && Object.keys(privateDataModel).length !== 0) {
        this.showLogoutForm();
      }
      else {
        this.showLoginForm();
      }
    });
  }

  /**
   * @private
   */
  showLoginForm() {
    this.loginForm.style.display = "block";
    this.logoutForm.style.display = "none";
  }

  /**
   * @private
   */
  showLogoutForm() {
    this.loginForm.style.display = "none";
    this.logoutForm.style.display = "block";
  }

  /**
   * @private
   */
  sendMessageWithParams(messageName, params) {
    ext.tabs.query({}, tabs => {
      tabs.forEach(tab => {
        ext.tabs.sendMessage(tab.id, {messageName, params});
      });
    });
  }
}