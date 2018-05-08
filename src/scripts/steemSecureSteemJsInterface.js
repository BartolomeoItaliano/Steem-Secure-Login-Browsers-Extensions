import {SSERequest} from "./SSERequest";

let sseRequest = new SSERequest();

window.SteemSecure={};
window.SteemSecure.api={};
window.SteemSecure.broadcast={};

/**
 * @param {Array<string>} accounts - array of steem accounts names
 * @param {function(Array<Object>)} callback - array with steem accounts public information
 */
window.SteemSecure.api.getAccounts = function(accounts, callback){
  let params = {accounts};
  sseRequest.send("steem.api.getAccounts", params, callback);
};

/**
 * @param {string} to - Steem Account Name
 * @param {string} amount - example: "1.000 SBD" or "1.000 STEEM". Remember about three decimal places!
 * @param {string} memo - additional transfer message
 * @param {function} callback
 */
window.SteemSecure.broadcast.prepareAndSignTransferTransaction = function(to, amount, memo, callback){
  let params = {wif, from, to, amount, memo};
  sseRequest.send("steem.broadcast.prepareAndSignTransferTransaction", params, callback);
};

/**
 * @param signedTransaction - signed transfer transaction
 * @param {function} callback
 * @returns {void}
 */
window.SteemSecure.broadcast.sendSignedTransaction = function(signedTransaction, callback){
  let params = {signedTransaction};
  sseRequest.send("steem.broadcast.broadcastSignedTransaction", params, callback);
};

/**
 * @param {string} to - Steem Account Name
 * @param {string} amount - example: "1.000 SBD" or "1.000 STEEM". Remember about three decimal places!
 * @param {string} memo - additional transfer message
 * @param {function} callback
 * @returns {void}
 */
window.SteemSecure.broadcast.transfer = function(to, amount, memo, callback){
  let params = {to, amount, memo};
  sseRequest.send("steem.broadcast.transfer", params, callback);
};

/**
 * @param {object} options - object with steem-js library custom configuration
 * @param {function} callback
 */
window.SteemSecure.api.setOptions = function(options, callback){
  let params = {options};
  sseRequest.send("steem.api.setOptions", params, callback);
};