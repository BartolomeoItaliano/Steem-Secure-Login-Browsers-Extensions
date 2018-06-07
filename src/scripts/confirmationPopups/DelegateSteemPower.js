import ext from "../utils/ext";
import {Utils} from "../utils/Utils";

class DelegateSteemPower {
  constructor() {
    this.confirmButton = document.getElementById("confirmButton");
    this.refuseButton = document.getElementById("refuseButton");
    this.confirmationHeader = document.getElementById("confirmationHeader");
    this.VESTS_TO_STEEM_CONST = 489.282 / 1e6;
    this.requestId = this.getRequestIdFromUrl();

    let amountOfVests = parseFloat(this.getVestingSharesFromUrl().split(" ")[0]);

    this.confirmationHeader.innerText = "Confirm " + (amountOfVests * this.VESTS_TO_STEEM_CONST).toFixed(3) + " Steem Power Delegation to " + Utils.capitalizeFirstLetter(this.getDelegateeFromUrl());

    this.initEventListeners();
  }

  initEventListeners() {
    this.confirmButton.addEventListener("click", this.onConfirmButtonClicked.bind(this));
    this.refuseButton.addEventListener("click", this.onRefuseButtonClicked.bind(this));

    window.onbeforeunload = this.onRefuseButtonClicked.bind(this);
  }

  onConfirmButtonClicked() {
    ext.runtime.getBackgroundPage(function (backgroundPage) {
      let params = {
        allowed: true, settings: {
          delegateSteemPowerPermanentlyAlowed: document.getElementById("confirmInFutureCheckbox").checked
        }
      };
      backgroundPage.responsesWaitingForProceed[this.requestId](params);
      window.close();
    }.bind(this));
  }

  onRefuseButtonClicked() {
    ext.runtime.getBackgroundPage(function (backgroundPage) {
      let params = {
        allowed: false, settings: {}
      };
      backgroundPage.responsesWaitingForProceed[this.requestId](params);
      window.close();
    }.bind(this));
  }

  getDelegateeFromUrl() {
    let url = new URL(window.location.href);
    return url.searchParams.get("delegatee");
  }

  getVestingSharesFromUrl() {
    let url = new URL(window.location.href);
    return url.searchParams.get("vesting_shares");
  }

  getRequestIdFromUrl() {
    let url = new URL(window.location.href);
    return url.searchParams.get("requestId");
  }
}

window.onload = function () {
  new DelegateSteemPower();
};
