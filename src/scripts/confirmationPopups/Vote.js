import ext from "../utils/ext";
import {Utils} from "../utils/Utils";

class Vote {
  constructor() {
    this.confirmButton = document.getElementById("confirmButton");
    this.refuseButton = document.getElementById("refuseButton");
    this.confirmationHeader = document.getElementById("confirmationHeader");
    this.requestId = this.getRequestIdFromUrl();

    this.confirmationHeader.innerText = "Confirm " + this.getWeightFromUrl() / 100 + "% Vote On " + Utils.capitalizeFirstLetter(this.getAuthorFromUrl());

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
          votePermanentlyAllowed: document.getElementById("confirmInFutureCheckbox").checked
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

  getRequestIdFromUrl() {
    let url = new URL(window.location.href);
    return url.searchParams.get("requestId");
  }

  getAuthorFromUrl() {
    let url = new URL(window.location.href);
    return url.searchParams.get("author");
  }

  getPermlinkFromUrl() {
    let url = new URL(window.location.href);
    return url.searchParams.get("permlink");
  }

  getWeightFromUrl() {
    let url = new URL(window.location.href);
    return url.searchParams.get("weight");
  }
}

window.onload = function () {
  new Vote();
};
