import {BackgroundRequest} from "./BackgroundRequest";

export class ConfirmationManager {
  constructor() {
    this.backgroundRequest = new BackgroundRequest();
    let params = {dupa: "dupa"};
  }

  askForTransfer(params, callback) {
    this.backgroundRequest.send("ConfirmPopup.broadcast.transfer", params, function () {
      console.log("works");
      callback(params.allowed);
      return true;
    })
  }
}