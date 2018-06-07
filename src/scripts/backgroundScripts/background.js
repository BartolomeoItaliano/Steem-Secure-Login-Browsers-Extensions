import {BackgroundServer} from "./BackgroundServer";

let backgroundServer = new BackgroundServer();
const EXTENSION_POPUP = {
  WIDTH: 740,
  HEIGHT: 420
};

window.responsesWaitingForProceed = {};

/**
 * Response function is called from ConfirmationPopup where we have reference to background script
 * @type {response}
 */
backgroundServer.on(
  "ConfirmPopup.broadcast.transfer", function (request, response) {
    window.responsesWaitingForProceed[request.id] = response;
    window.open("confirmationPopups/Transfer.html?requestId=" + request.id +"&amount="+request.params.amount+"&recipient="+request.params.to, "extension_popup", "width=" + EXTENSION_POPUP.WIDTH + ",height=" + EXTENSION_POPUP.HEIGHT + ",status=no,resizable=no");
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.comment", function (request, response) {
    window.responsesWaitingForProceed[request.id] = response;
    window.open("confirmationPopups/PostOrComment.html?requestId=" + request.id, "extension_popup", "width=" + EXTENSION_POPUP.WIDTH + ",height=" + EXTENSION_POPUP.HEIGHT + ",status=no,resizable=no");
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.deleteComment", function (request, response) {
    window.responsesWaitingForProceed[request.id] = response;
    window.open("confirmationPopups/DeletePostOrComment.html?requestId=" + request.id,
      "extension_popup",
      "width=" + EXTENSION_POPUP.WIDTH + ",height=" + EXTENSION_POPUP.HEIGHT + ",status=no,resizable=no"
    );
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.vote", function (request, response) {
    window.responsesWaitingForProceed[request.id] = response;
    window.open("confirmationPopups/Vote.html?requestId=" + request.id+"&author="+request.params.author+"&permlink="+request.params.permlink+"&weight="+request.params.weight,
      "extension_popup",
      "width=" + EXTENSION_POPUP.WIDTH + ",height=" + EXTENSION_POPUP.HEIGHT + ",status=no,resizable=no"
    );
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.delegateSteemPower", function (request, response) {
    window.responsesWaitingForProceed[request.id] = response;
    window.open("confirmationPopups/DelegateSteemPower.html?requestId=" + request.id+"&delegatee="+request.params.delegatee+"&vesting_shares="+request.params.vesting_shares,
      "extension_popup",
      "width=" + EXTENSION_POPUP.WIDTH + ",height=" + EXTENSION_POPUP.HEIGHT + ",status=no,resizable=no"
    );
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.unknownOperation", function (request, response) {
    window.responsesWaitingForProceed[request.id] = response;
    window.open("confirmationPopups/UnknownOperationConfirmationPopup.html?requestId=" + request.id,
      "extension_popup",
      "width=" + EXTENSION_POPUP.WIDTH + ",height=" + EXTENSION_POPUP.HEIGHT + ",status=no,resizable=no"
    );
  }
);
