import {BackgroundRequest} from "./BackgroundRequest";

export class ConfirmationManager {
  constructor() {
    this.backgroundRequest = new BackgroundRequest();
  }

  askForTransfer(params, callback) {
    //to do
    //here check if operation is permitted permamently
    this.backgroundRequest.send("ConfirmPopup.broadcast.transfer", params, function (bRparams) {
      //Check if User Allowed future automatic confirmations, if yes changed params in storage
      callback(bRparams.allowed);
      return true;
    })
  }
}