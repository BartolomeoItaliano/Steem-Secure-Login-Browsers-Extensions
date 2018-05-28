import ext from "../utils/ext";

class ConfirmationPopup{
  constructor(){
    this.confirmButton = document.getElementById("confirmButton");
    this.refuseButton = document.getElementById("refuseButton");
    this.requestId = this.getRequestIdFromUrl();
    console.log(this.requestId);
    this.initEventListeners();
  }

  initEventListeners(){
    this.confirmButton.addEventListener("click", this.onConfirmButtonClicked.bind(this));
    this.refuseButton.addEventListener("click", this.onRefuseButtonClicked.bind(this));

    window.onbeforeunload = this.onRefuseButtonClicked.bind(this);
  }

  onConfirmButtonClicked(){
    ext.runtime.getBackgroundPage(function (backgroundPage) {
      let params = {allowed: true};
      backgroundPage.responsesWaitingForProceed[this.requestId](params);
    }.bind(this));
  }

  onRefuseButtonClicked(){
    ext.runtime.getBackgroundPage(function (backgroundPage) {
      let params = {allowed: false};
      backgroundPage.responsesWaitingForProceed[this.requestId](params);
      window.close();
    }.bind(this));
  }

  getRequestIdFromUrl(){
    let url = new URL(window.location.href);
    return url.searchParams.get("requestId");
  }
}
window.onload = function () {
  new ConfirmationPopup();
};
