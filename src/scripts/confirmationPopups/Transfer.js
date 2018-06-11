import ext from "../utils/ext";
import {Utils} from "../utils/Utils";

class Transfer {
  constructor() {
    this.confirmButton = document.getElementById("confirmButton");
    this.refuseButton = document.getElementById("refuseButton");
    this.confirmationHeader = document.getElementById("confirmationHeader");
    this.requestId = this.getRequestIdFromUrl();

    this.confirmationHeader.innerText = "Confirm Transfer "+ this.getTransactionAmount() + " to "+ Utils.capitalizeFirstLetter(this.getTransactionRecipient());

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
          transfersTemporaryAllowed: document.getElementById("confirmInFutureCheckbox").checked
        }
      };
      backgroundPage.responsesWaitingForProceed[this.requestId](params);
    }.bind(this));
  }

  onRefuseButtonClicked() {
    ext.runtime.getBackgroundPage(function (backgroundPage) {
      let params = {
        allowed: false, settings: {}
      };
      backgroundPage.responsesWaitingForProceed[this.requestId](params);
    }.bind(this));
  }

  getRequestIdFromUrl() {
    let url = new URL(window.location.href);
    return url.searchParams.get("requestId");
  }

  getTransactionAmount() {
    let url = new URL(window.location.href);
    return url.searchParams.get("amount");
  }

  getTransactionRecipient() {
    let url = new URL(window.location.href);
    return url.searchParams.get("recipient");
  }
}

window.onload = function () {
  new Transfer();
};
