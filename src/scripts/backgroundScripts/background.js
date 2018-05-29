import {BackgroundServer} from "./BackgroundServer";

let backgroundServer = new BackgroundServer();

window.responsesWaitingForProceed = {};

backgroundServer.on(
  "ConfirmPopup.broadcast.transfer", function (request, response) {
    /**
     * Response function is called from ConfirmationPopup where we have reference to background script
     * @type {response}
     */
    window.responsesWaitingForProceed[request.id]=response;
    window.open("ConfirmationPopup.html?requestId="+request.id, "extension_popup", "width=250,height=220,status=no,resizable=no");
  }
);
