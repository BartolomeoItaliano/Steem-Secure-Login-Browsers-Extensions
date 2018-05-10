import {SSERequest} from "./SSERequest";

let sseRequest = new SSERequest();

window.SteemSecure = {};
window.SteemSecure.api = {};
window.SteemSecure.broadcast = {};
window.SteemSecure.config = {};

/**
 * @param {object} options - object with steem-js library custom configuration
 * @param {function} callback
 */
window.SteemSecure.api.setOptions = function (options, callback) {
  let params = {options};
  sseRequest.send("steem.api.setOptions", params, callback);
};

/**
 * @param {string} property
 * @param {string} value
 * @param {function} callback
 */
window.SteemSecure.config.set = function (property, value, callback) {
  let params = {property, value};
  sseRequest.send("steem.config.set", params, callback);
};

/**
 * @param {string} property
 * @param {function} callback
 */
window.SteemSecure.config.get = function (property, callback) {
  let params = {property};
  sseRequest.send("steem.config.set", params, callback);
};

/**
 * @param {string} afterTag
 * @param limit
 * @param {function} callback
 */
window.SteemSecure.api.getTrendingTags = function (afterTag, limit, callback) {
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
window.SteemSecure.api.getDiscussionsByTrending = function (query, callback) {
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByTrending", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByCreated = function (query, callback) {
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByCreated", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByActive = function (query, callback) {
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByActive", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByCashout = function (query, callback) {
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByCashout", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByPayout = function (query, callback) {
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByPayout", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByVotes = function (query, callback) {
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByVotes", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByChildren = function (query, callback) {
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByChildren", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByHot = function (query, callback) {
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByHot", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByFeed = function (query, callback) {
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByFeed", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByBlog = function (query, callback) {
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByBlog", params, callback);
};

/**
 * @param {Query} query
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByComments = function (query, callback) {
  let params = {query};
  sseRequest.send("steem.api.getDiscussionsByComments", params, callback);
};

/**
 * @param {number} blockNum
 * @param {function} callback
 */
window.SteemSecure.api.getBlockHeader = function (blockNum, callback) {
  let params = {blockNum};
  sseRequest.send("steem.api.getBlockHeader", params, callback);
};

/**
 * @param {number} blockNum
 * @param {function} callback
 */
window.SteemSecure.api.getBlock = function (blockNum, callback) {
  let params = {blockNum};
  sseRequest.send("steem.api.getBlock", params, callback);
};

/**
 * @param {string} path
 * @param {function} callback
 */
window.SteemSecure.api.getState = function (path, callback) {
  let params = {path};
  sseRequest.send("steem.api.getState", params, callback);
};

/**
 * @param after
 * @param {number} limit
 * @param {function} callback
 */
window.SteemSecure.api.getTrendingCategories = function (after, limit, callback) {
  let params = {after, limit};
  sseRequest.send("steem.api.getTrendingCategories", params, callback);
};

/**
 * @param after
 * @param {number} limit
 * @param {function} callback
 */
window.SteemSecure.api.getBestCategories = function (after, limit, callback) {
  let params = {after, limit};
  sseRequest.send("steem.api.getBestCategories", params, callback);
};

/**
 * @param after
 * @param {number} limit
 * @param {function} callback
 */
window.SteemSecure.api.getActiveCategories = function (after, limit, callback) {
  let params = {after, limit};
  sseRequest.send("steem.api.getActiveCategories", params, callback);
};

/**
 * @param after
 * @param {number} limit
 * @param {function} callback
 */
window.SteemSecure.api.getRecentCategories = function (after, limit, callback) {
  let params = {after, limit};
  sseRequest.send("steem.api.getRecentCategories", params, callback);
};

/**
 * @param {function} callback
 */
window.SteemSecure.api.getConfig = function (callback) {
  let params = {};
  sseRequest.send("steem.api.getConfig", params, callback);
};

/**
 * @param {function} callback
 */
window.SteemSecure.api.getDynamicGlobalProperties = function (callback) {
  let params = {};
  sseRequest.send("steem.api.getDynamicGlobalProperties", params, callback);
};

/**
 * @param {function} callback
 */
window.SteemSecure.api.getChainProperties = function (callback) {
  let params = {};
  sseRequest.send("steem.api.getChainProperties", params, callback);
};

/**
 * @param {function} callback
 */
window.SteemSecure.api.getFeedHistory = function (callback) {
  let params = {};
  sseRequest.send("steem.api.getFeedHistory", params, callback);
};

/**
 * @param {function} callback
 */
window.SteemSecure.api.getCurrentMedianHistoryPrice = function (callback) {
  let params = {};
  sseRequest.send("steem.api.getCurrentMedianHistoryPrice", params, callback);
};

/**
 * @param {function} callback
 */
window.SteemSecure.api.getHardforkVersion = function (callback) {
  let params = {};
  sseRequest.send("steem.api.getHardforkVersion", params, callback);
};

/**
 * @param {function} callback
 */
window.SteemSecure.api.getNextScheduledHardfork = function (callback) {
  let params = {};
  sseRequest.send("steem.api.getNextScheduledHardfork", params, callback);
};

/**
 * @param {string} name
 * @param {function} callback
 */
window.SteemSecure.api.getRewardFund = function (name, callback) {
  let params = {name};
  sseRequest.send("steem.api.getRewardFund", params, callback);
};

/**
 * @param {string} account
 * @param from
 * @param {number} limit
 * @param {function} callback
 */
window.SteemSecure.api.getVestingDelegations = function (account, from, limit, callback) {
  let params = {account, from, limit};
  sseRequest.send("steem.api.getVestingDelegations", params, callback);
};

/**
 * @param {string} key
 * @param {function} callback
 */
window.SteemSecure.api.getKeyReferences = function (key, callback) {
  let params = {key};
  sseRequest.send("steem.api.getKeyReferences", params, callback);
};

/**
 * @param {Array<string>} accounts - array of steem accounts names
 * @param {function(Array<Object>)} callback - array with steem accounts public information
 */
window.SteemSecure.api.getAccounts = function (accounts, callback) {
  let params = {accounts};
  sseRequest.send("steem.api.getAccounts", params, callback);
};

/**
 * @param {number} accountId
 * @param {function} callback
 */
window.SteemSecure.api.getAccountReferences = function (accountId, callback) {
  let params = {accountId};
  sseRequest.send("steem.api.getAccountReferences", params, callback);
};

/**
 * @param {Array<string>} accountNames - array of steem accounts names
 * @param {function} callback
 */
window.SteemSecure.api.lookupAccountNames = function (accountNames, callback) {
  let params = {accountNames};
  sseRequest.send("steem.api.lookupAccountNames", params, callback);
};

/**
 * @param {string} lowerBoundName
 * @param {number} limit
 * @param {function} callback
 */
window.SteemSecure.api.lookupAccounts = function (lowerBoundName, limit, callback) {
  let params = {lowerBoundName, limit};
  sseRequest.send("steem.api.lookupAccounts", params, callback);
};

/**
 * @param {function} callback
 */
window.SteemSecure.api.getAccountCount = function (callback) {
  let params = {};
  sseRequest.send("steem.api.getAccountCount", params, callback);
};

/**
 * @param {string} accountName
 * @param {function} callback
 */
window.SteemSecure.api.getConversionRequests = function (accountName, callback) {
  let params = {accountName};
  sseRequest.send("steem.api.getConversionRequests", params, callback);
};

/**
 * @param {string} account
 * @param {string} from
 * @param {number} limit
 * @param {function} callback
 */
window.SteemSecure.api.getAccountHistory = function (account, from, limit, callback) {
  let params = {account, from, limit};
  sseRequest.send("steem.api.getAccountHistory", params, callback);
};

/**
 * @param {string} account
 * @param {function} callback
 */
window.SteemSecure.api.getOwnerHistory = function (account, callback) {
  let params = {account};
  sseRequest.send("steem.api.getOwnerHistory", params, callback);
};

/**
 * @param {string} account
 * @param {function} callback
 */
window.SteemSecure.api.getRecoveryRequest = function (account, callback) {
  let params = {account};
  sseRequest.send("steem.api.getRecoveryRequest", params, callback);
};

/**
 * @param {string} to - Steem Account Name
 * @param {string} amount - example: "1.000 SBD" or "1.000 STEEM". Remember about three decimal places!
 * @param {string} memo - additional transfer message
 * @param {function} callback
 */
window.SteemSecure.broadcast.prepareAndSignTransferTransaction = function (to, amount, memo, callback) {
  let params = {to, amount, memo};
  sseRequest.send("steem.broadcast.prepareAndSignTransferTransaction", params, callback);
};

/**
 * @param signedTransaction - signed transfer transaction
 * @param {function} callback
 * @returns {void}
 */
window.SteemSecure.broadcast.sendSignedTransaction = function (signedTransaction, callback) {
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
window.SteemSecure.broadcast.transfer = function (to, amount, memo, callback) {
  let params = {to, amount, memo};
  sseRequest.send("steem.broadcast.transfer", params, callback);
};
