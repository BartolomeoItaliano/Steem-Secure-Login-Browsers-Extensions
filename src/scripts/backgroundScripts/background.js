import {BackgroundServer} from "./BackgroundServer";

let backgroundServer = new BackgroundServer();

window.responsesWaitingForProceed = {};

/**
 * Response function is called from ConfirmationPopup where we have reference to background script
 * @type {response}
 */
backgroundServer.on(
  "ConfirmPopup.broadcast.transfer", function (request, response) {
    window.responsesWaitingForProceed[request.id]=response;
    window.open("confirmationPopups/Transfer.html?requestId="+request.id, "extension_popup", "width=250,height=220,status=no,resizable=no");
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.comment", function (request, response) {
    window.responsesWaitingForProceed[request.id]=response;
    window.open("confirmationPopups/PostOrComment.html?requestId="+request.id, "extension_popup", "width=250,height=220,status=no,resizable=no");
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.deleteComment", function (request, response) {
    window.responsesWaitingForProceed[request.id]=response;
    window.open("confirmationPopups/DeletePostOrComment.html?requestId="+request.id, "extension_popup", "width=250,height=220,status=no,resizable=no");
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.vote", function (request, response) {
    window.responsesWaitingForProceed[request.id]=response;
    window.open("confirmationPopups/Vote.html?requestId="+request.id, "extension_popup", "width=250,height=220,status=no,resizable=no");
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.delegateSteemPower", function (request, response) {
    window.responsesWaitingForProceed[request.id]=response;
    window.open("confirmationPopups/DelegateSteemPower.html?requestId="+request.id, "extension_popup", "width=250,height=220,status=no,resizable=no");
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.unknownOperation", function (request, response) {
    window.responsesWaitingForProceed[request.id]=response;
    window.open("confirmationPopups/UnknownOperationConfirmationPopup.html?requestId="+request.id, "extension_popup", "width=250,height=220,status=no,resizable=no");
  }
);
