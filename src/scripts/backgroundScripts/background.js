import {BackgroundServer} from "./BackgroundServer";

let backgroundServer = new BackgroundServer();

window.responsesWaitingForProceed = {};

backgroundServer.on(
  "ConfirmPopup.broadcast.transfer", function (request, response) {
    console.log(request);
    window.responsesWaitingForProceed[request.id]=response;
    window.open("ConfirmationPopup.html?requestId="+request.id, "extension_popup", "width=250,height=220,status=no,resizable=no");
  }
);
