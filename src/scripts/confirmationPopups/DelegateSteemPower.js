import ext from "../utils/ext";

class DelegateSteemPower {
  constructor() {
    this.confirmButton = document.getElementById("confirmButton");
    this.refuseButton = document.getElementById("refuseButton");
    this.requestId = this.getRequestIdFromUrl();
    console.log(this.requestId);
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
          delegateSteemPowerPermanentlyAlowed: document.getElementById("myCheck").checked
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
}

window.onload = function () {
  new DelegateSteemPower();
};
