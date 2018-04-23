import * as steem from "steem";
import * as bluebird from "bluebird";
import {ExtensionServer} from "./ExtensionServer";

let s = document.createElement('script');
s.src = chrome.extension.getURL('scripts/steemSecureSteemJsInterface.js');
(document.head || document.documentElement).appendChild(s);

const extensionServer = new ExtensionServer();

extensionServer.on(
  "steem.api.setOptions", function (params, eResponse) {
    steem.api.setOptions(params.options);

    eResponse.send({});
  }
);

extensionServer.on(
  "steem.api.getAccounts", function (params, eResponse) {
    steem.api.getAccounts(params.accounts, function (err, res) {
      eResponse.send(res,err);
    });
  }
);

extensionServer.on(
  "steem.broadcast.prepareAndSignTransferTransaction", function (params, eResponse) {
    let tx = {
        extensions: [],
        operations: [
          ["transfer", {
            amount: params.amount,
            from: params.from,
            to: params.to,
            memo: params.memo
          }]
        ]
      };
    steem.broadcast._prepareTransaction(tx).then(function (params) {
      return bluebird.join(transaction, steem.auth.signTransaction(params.transaction, {active: params.activeKeyWIF}));
    }).spread(function (transaction, signedTransaction) {
      eResponse.send(signedTransaction);
    });
  }
);

extensionServer.on(
  "steem.broadcast.broadcastSignedTransaction", function (params, eResponse) {
    steem.api.broadcastTransactionSynchronousAsync(params.signedTransaction).then(function (result) {
      eResponse.send(result);
    });
  }
);

extensionServer.on(
  "steem.broadcast.transfer", function (params, eResponse) {
    steem.broadcast.transfer(params.wif, params.from, params.to, params.amount, params.memo, function(err, res) {
      eResponse.send(res, err);
    });
  }
);

