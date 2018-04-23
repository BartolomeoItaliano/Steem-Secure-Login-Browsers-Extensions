import {SSERequest} from "./SSERequest";

let sseRequest = new SSERequest();

window.steem={};
window.steem.api={};
window.steem.broadcast={};

window.steem.api.setOptions = function(options, callback){
  let params = {options};
  sseRequest.send("steem.api.setOptions", params, callback);
};

window.steem.api.getAccounts = function(accounts, callback){
  let params = {accounts};
  sseRequest.send("steem.api.getAccounts", params, callback);
};

window.steem.broadcast.prepareAndSignTransferTransaction = function(wif, from, to, amount, memo, callback){
  let params = {wif, from, to, amount, memo};
  sseRequest.send("steem.broadcast.prepareAndSignTransferTransaction", params, callback);
};

window.steem.broadcast.sendSignedTransaction = function(signedTransaction, callback){
  sseRequest.send("steem.broadcast.broadcastSignedTransaction", signedTransaction, callback);
};

window.steem.broadcast.transfer = function(to, amount, memo, callback){
  let params = {to, amount, memo};
  sseRequest.send("steem.broadcast.transfer", params, callback);
};
