import {SSERequest} from "./SSERequest";

let sseRequest = new SSERequest();

window.SteemSecure={};
window.SteemSecure.api={};
window.SteemSecure.broadcast={};

window.SteemSecure.api.setOptions = function(options, callback){
  let params = {options};
  sseRequest.send("steem.api.setOptions", params, callback);
};

window.SteemSecure.api.getAccounts = function(accounts, callback){
  let params = {accounts};
  sseRequest.send("steem.api.getAccounts", params, callback);
};

window.SteemSecure.broadcast.prepareAndSignTransferTransaction = function(wif, from, to, amount, memo, callback){
  let params = {wif, from, to, amount, memo};
  sseRequest.send("steem.broadcast.prepareAndSignTransferTransaction", params, callback);
};

window.SteemSecure.broadcast.sendSignedTransaction = function(signedTransaction, callback){
  sseRequest.send("steem.broadcast.broadcastSignedTransaction", signedTransaction, callback);
};

window.SteemSecure.broadcast.transfer = function(to, amount, memo, callback){
  let params = {to, amount, memo};
  sseRequest.send("steem.broadcast.transfer", params, callback);
};
