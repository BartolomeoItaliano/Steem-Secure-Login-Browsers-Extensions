import {BackgroundServer} from "./BackgroundServer";
import ext from "../utils/ext";

let backgroundServer = new BackgroundServer();
const EXTENSION_POPUP = {
  WIDTH: 840,
  HEIGHT: 550
};

window.responsesWaitingForProceed = {};

/**
 * Response function is called from ConfirmationPopup where we have reference to background script
 * @type {response}
 */
backgroundServer.on(
  "ConfirmPopup.broadcast.transfer", function (request, response) {
    ext.windows.create({
        url: "confirmationPopups/Transfer.html?requestId=" + request.id + "&amount=" + request.params.amount + "&recipient=" + request.params.to,
        width: EXTENSION_POPUP.WIDTH,
        height: EXTENSION_POPUP.HEIGHT
      }, function callback(createdWindow) {
        window.responsesWaitingForProceed[request.id] = function (settingsFromPopup) {
          response(settingsFromPopup);
          ext.windows.remove(createdWindow.id);
        }
      }
    )
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.comment", function (request, response) {
    ext.windows.create({
        url: "confirmationPopups/PostOrComment.html?requestId=" + request.id,
        width: EXTENSION_POPUP.WIDTH,
        height: EXTENSION_POPUP.HEIGHT
      }, function callback(createdWindow) {
        window.responsesWaitingForProceed[request.id] = function (settingsFromPopup) {
          response(settingsFromPopup);
          ext.windows.remove(createdWindow.id);
        }
      }
    )
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.deleteComment", function (request, response) {
    ext.windows.create({
        url: "confirmationPopups/DeletePostOrComment.html?requestId=" + request.id,
        width: EXTENSION_POPUP.WIDTH,
        height: EXTENSION_POPUP.HEIGHT
      }, function callback(createdWindow) {
        window.responsesWaitingForProceed[request.id] = function (settingsFromPopup) {
          response(settingsFromPopup);
          ext.windows.remove(createdWindow.id);
        }
      }
    )
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.vote", function (request, response) {
    ext.windows.create({
        url: "confirmationPopups/Vote.html?requestId=" + request.id + "&author=" + request.params.author + "&permlink=" + request.params.permlink + "&weight=" + request.params.weight,
        width: EXTENSION_POPUP.WIDTH,
        height: EXTENSION_POPUP.HEIGHT
      }, function callback(createdWindow) {
        window.responsesWaitingForProceed[request.id] = function (settingsFromPopup) {
          response(settingsFromPopup);
          ext.windows.remove(createdWindow.id);
        }
      }
    )
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.delegateSteemPower", function (request, response) {
    ext.windows.create({
        url: "confirmationPopups/DelegateSteemPower.html?requestId=" + request.id + "&delegatee=" + request.params.delegatee + "&vesting_shares=" + request.params.vesting_shares,
        width: EXTENSION_POPUP.WIDTH,
        height: EXTENSION_POPUP.HEIGHT
      }, function callback(createdWindow) {
        window.responsesWaitingForProceed[request.id] = function (settingsFromPopup) {
          response(settingsFromPopup);
          ext.windows.remove(createdWindow.id);
        }
      }
    )
  }
);

backgroundServer.on(
  "ConfirmPopup.broadcast.unknownOperation", function (request, response) {
    window.responsesWaitingForProceed[request.id] = response;
    ext.windows.create({
        url: "confirmationPopups/UnknownOperation.html?requestId=" + request.id,
        width: EXTENSION_POPUP.WIDTH,
        height: EXTENSION_POPUP.HEIGHT
      }, function callback(createdWindow) {
        window.responsesWaitingForProceed[request.id] = function (settingsFromPopup) {
          response(settingsFromPopup);
          ext.windows.remove(createdWindow.id);
        }
      }
    )
  }
);
