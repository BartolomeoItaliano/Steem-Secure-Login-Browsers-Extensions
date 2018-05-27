import {BackgroundServer} from "./BackgroundServer";

let backgroundServer = new BackgroundServer();

backgroundServer.on(
  "ConfirmPopup.broadcast.transfer", function (params, response) {
    console.log(params);
    window.open("ConfirmationPopup.html", "extension_popup", "width=720,height=660,status=no,scrollbars=yes,resizable=no");
    response({text:"confirmed"});
  }
);
