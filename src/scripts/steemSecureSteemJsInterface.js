import {SSERequest} from "./SSERequest";

let sseRequest = new SSERequest();

window.SteemSecure={};
window.SteemSecure.api={};
window.SteemSecure.broadcast={};
window.SteemSecure.config={};

/**
 * @param {object} options - object with steem-js library custom configuration
 * @param {function} callback
 */
window.SteemSecure.api.setOptions = function(options, callback){
  let params = {options};
  sseRequest.send("steem.api.setOptions", params, callback);
};

/**
 * @param {string} property
 * @param {string} value
 * @param {function} callback
 */
window.SteemSecure.config.set= function(property, value, callback){
  let params = {property, value};
  sseRequest.send("steem.config.set", params, callback);
};

/**
 * @param {string} property
 * @param {function} callback
 */
window.SteemSecure.config.get= function(property, callback){
  let params = {property};
  sseRequest.send("steem.config.set", params, callback);
};

/**
 * @param {string} afterTag
 * @param limit
 * @param {function} callback
 */
window.SteemSecure.api.getTrendingTags= function(afterTag, limit, callback){
  let params = {afterTag, limit};
  sseRequest.send("steem.api.getTrendingTags", params, callback);
};

/**
 * @namespace Query
 * @param {string} tag
 * @param {number} limit
 * @param {string} start_author
 * There are more Query params, but I cannot find them all. Look in tutorials and inform me, I will update documentation.
 */

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByTrending= function(query, callback){
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByTrending", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByCreated= function(query, callback){
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByCreated", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByActive= function(query, callback){
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByActive", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByCashout= function(query, callback){
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByCashout", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByPayout= function(query, callback){
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByPayout", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByVotes= function(query, callback){
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByVotes", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByChildren= function(query, callback){
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByChildren", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByHot= function(query, callback){
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByHot", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByFeed= function(query, callback){
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByFeed", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByBlog= function(query, callback){
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByBlog", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByComments= function(query, callback){
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByComments", params, callback);
};

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
