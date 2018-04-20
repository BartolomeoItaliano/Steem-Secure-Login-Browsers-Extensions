import ext from "./utils/ext";
import * as steem from "steem";
import {ExtensionServer} from "./ExtensionServer";

const extensionServer = new ExtensionServer();

extensionServer.on(
  "steem.api.setOptions", function (params, res) {
    var object={someproperty: "prop"};

    res.send(object);
  }
);