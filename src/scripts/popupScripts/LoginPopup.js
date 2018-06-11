import * as steem from "steem";
import * as ext from "../utils/ext";
import {PrivateDataModel} from "../utils/PrivateDataModel";
import {PrivateDataManager} from "../contentScripts/PrivateDataManager";

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
    this.errorMessage = document.getElementById("errorMessage");
    this.initializePopupListeners();
    this.initializePopup();
  }

  login() {
    let login = this.loginInput.value;
    let passwordOrWIF = this.steemPasswordInput.value;
    let publicKeys = {};
    let privateDataModel = new PrivateDataModel(login);

    clearTimeout(this.errorMessageTimeout);
    this.errorMessage.style.display = "none";

    steem.api.getAccounts([login], function (err, res) {
      if(res.length === 0){
        this.showErrorMessage("Wrong username!");
        return;
      }
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
          this.showErrorMessage("We don't need your owner key");
          return;
        }
        else {
          this.showErrorMessage("You've typed wrong WIF");
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
          this.showErrorMessage("You've typed wrong password.");
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
  showErrorMessage(errorMessage){
    clearTimeout(this.errorMessageTimeout);
    this.errorMessage.style.display = "block";
    this.errorMessage.innerText = errorMessage;
    this.errorMessageTimeout = setTimeout(function () {
      this.errorMessage.style.display = "none";
    }.bind(this), 5000);
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

window.onload = function () {
  new LoginPopup();
};