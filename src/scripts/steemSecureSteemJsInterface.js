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
 * @param {function(Object, Array<Object>)} callback - array with steem accounts public information
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
 * @param {number} limit
 * @param {function} callback
 */
window.SteemSecure.api.getOrderBook = function (limit, callback) {
  let params = {limit};
  sseRequest.send("steem.api.getOrderBook", params, callback);
};

/**
 * @param {string} owner
 * @param {function} callback
 */
window.SteemSecure.api.getOpenOrders = function (owner, callback) {
  let params = {owner};
  sseRequest.send("steem.api.getOpenOrders", params, callback);
};

/**
 * @param {string} startAccount
 * @param {number} limit
 * @param {function} callback
 */
window.SteemSecure.api.getLiquidityQueue = function (startAccount, limit, callback) {
  let params = {startAccount, limit};
  sseRequest.send("steem.api.getLiquidityQueue", params, callback);
};

/**
 * @param {object} trx
 * @param {function} callback
 */
window.SteemSecure.api.getTransactionHex = function (trx, callback) {
  let params = {trx};
  sseRequest.send("steem.api.getTransactionHex", params, callback);
};

/**
 * @param {number} trxId
 * @param {function} callback
 */
window.SteemSecure.api.getTransaction = function (trxId, callback) {
  let params = {trxId};
  sseRequest.send("steem.api.getTransaction", params, callback);
};

/**
 * @param {object} trx
 * @param {Array<string>} availableKeys
 * @param {function} callback
 */
window.SteemSecure.api.getRequiredSignatures = function (trx, availableKeys, callback) {
  let params = {trx, availableKeys};
  sseRequest.send("steem.api.getRequiredSignatures", params, callback);
};

/**
 * @param {object} trx
 * @param {function} callback
 */
window.SteemSecure.api.getPotentialSignatures = function (trx, callback) {
  let params = {trx};
  sseRequest.send("steem.api.getPotentialSignatures", params, callback);
};

/**
 * @param {object} trx
 * @param {function} callback
 */
window.SteemSecure.api.verifyAuthority = function (trx, callback) {
  let params = {trx};
  sseRequest.send("steem.api.verifyAuthority", params, callback);
};

/**
 * @param {string||number} nameOrId
 * @param signers
 * @param {function} callback
 */
window.SteemSecure.api.verifyAccountAuthority = function (nameOrId, signers, callback) {
  let params = {nameOrId, signers};
  sseRequest.send("steem.api.verifyAccountAuthority", params, callback);
};

/**
 * @param {string} author
 * @param {string} permlink
 * @param {function} callback
 */
window.SteemSecure.api.getActiveVotes = function (author, permlink, callback) {
  let params = {author, permlink};
  sseRequest.send("steem.api.getActiveVotes", params, callback);
};

/**
 * @param {string} voter
 * @param {function} callback
 */
window.SteemSecure.api.getAccountVotes = function (voter, callback) {
  let params = {voter};
  sseRequest.send("steem.api.getAccountVotes", params, callback);
};

/**
 * @param {string} author
 * @param {string} permlink
 * @param {function} callback
 */
window.SteemSecure.api.getContent = function (author, permlink, callback) {
  let params = {author, permlink};
  sseRequest.send("steem.api.getContent", params, callback);
};

/**
 * @param {string} author
 * @param {string} permlink
 * @param {function} callback
 */
window.SteemSecure.api.getContentReplies = function (author, permlink, callback) {
  let params = {author, permlink};
  sseRequest.send("steem.api.getContentReplies", params, callback);
};

/**
 * @param {string} author
 * @param {string} startPermlink
 * @param beforeDate
 * @param {number} limit
 * @param {function} callback
 */
window.SteemSecure.api.getDiscussionsByAuthorBeforeDate = function (author, startPermlink, beforeDate, limit, callback) {
  let params = {author, startPermlink, beforeDate, limit};
  sseRequest.send("steem.api.getDiscussionsByAuthorBeforeDate", params, callback);
};

/**
 * @param {string} startAuthor
 * @param {string} startPermlink
 * @param {number} limit
 * @param {function} callback
 */
window.SteemSecure.api.getRepliesByLastUpdate = function (startAuthor, startPermlink, limit, callback) {
  let params = {startAuthor, startPermlink, limit};
  sseRequest.send("steem.api.getRepliesByLastUpdate", params, callback);
};

/**
 * @param {Array<string>} witnessIds
 * @param {function} callback
 */
window.SteemSecure.api.getWitnesses = function (witnessIds, callback) {
  let params = {witnessIds};
  sseRequest.send("steem.api.getWitnesses", params, callback);
};

/**
 * @param {string} accountName
 * @param {function} callback
 */
window.SteemSecure.api.getWitnessByAccount = function (accountName, callback) {
  let params = {accountName};
  sseRequest.send("steem.api.getWitnessByAccount", params, callback);
};

/**
 * @param from
 * @param {string} limit
 * @param {function} callback
 */
window.SteemSecure.api.getWitnessesByVote = function (from, limit, callback) {
  let params = {from, limit};
  sseRequest.send("steem.api.getWitnessesByVote", params, callback);
};

/**
 * @param {string} lowerBoundName
 * @param {number} limit
 * @param {function} callback
 */
window.SteemSecure.api.lookupWitnessAccounts = function (lowerBoundName, limit, callback) {
  let params = {lowerBoundName, limit};
  sseRequest.send("steem.api.lookupWitnessAccounts", params, callback);
};

/**
 * @param {function} callback
 */
window.SteemSecure.api.getWitnessCount = function (callback) {
  let params = {};
  sseRequest.send("steem.api.getWitnessCount", params, callback);
};

/**
 * @param {function} callback
 */
window.SteemSecure.api.getActiveWitnesses = function (callback) {
  let params = {};
  sseRequest.send("steem.api.getActiveWitnesses", params, callback);
};

/**
 * @param {function} callback
 */
window.SteemSecure.api.getMinerQueue = function (callback) {
  let params = {};
  sseRequest.send("steem.api.getMinerQueue", params, callback);
};

/**
 * @param {string} following
 * @param {number} startFollower
 * @param {"blog"} followType
 * @param {number} limit
 * @param {function} callback
 */
window.SteemSecure.api.getFollowers = function (following, startFollower, followType, limit, callback) {
  let params = {following, startFollower, followType, limit};
  sseRequest.send("steem.api.getFollowers", params, callback);
};

/**
 * @param {string} follower
 * @param {number} startFollowing
 * @param {"blog"} followType
 * @param {number} limit
 * @param {function} callback
 */
window.SteemSecure.api.getFollowing = function (follower, startFollowing, followType, limit, callback) {
  let params = {follower, startFollowing, followType, limit};
  sseRequest.send("steem.api.getFollowing", params, callback);
};

/**
 * @param {string} account
 * @param {function} callback
 */
window.SteemSecure.api.getFollowCount = function (account, callback) {
  let params = {account};
  sseRequest.send("steem.api.getFollowCount", params, callback);
};

/**
 * @param {object} trx
 * @param {function} callback
 */
window.SteemSecure.api.broadcastTransactionSynchronous = function (trx, callback) {
  let params = {trx};
  sseRequest.send("steem.api.broadcastTransactionSynchronous", params, callback);
};

/**
 * @param {object} b
 * @param {function} callback
 */
window.SteemSecure.api.broadcastBlock = function (b, callback) {
  let params = {b};
  sseRequest.send("steem.api.broadcastBlock", params, callback);
};

/**
 * @param {string} wif
 * @param {string} fee
 * @param {string} creator
 * @param {string} newAccountName
 * @param {string} ownerKey
 * @param {string} activeKey
 * @param {string} postingKey
 * @param {string} memoKey
 * @param {string} jsonMetadata
 * @param {function} callback
 */
window.SteemSecure.broadcast.accountCreate = function (wif, fee, creator, newAccountName, ownerKey, activeKey, postingKey, memoKey, jsonMetadata, callback) {
  let params = {wif, fee, creator, newAccountName, ownerKey, activeKey, postingKey, memoKey, jsonMetadata};
  sseRequest.send("steem.broadcast.accountCreate", params, callback);
};

/**
 * @param {string} wif
 * @param {string} fee
 * @param {string} delegation
 * @param {string} creator
 * @param {string} newAccountName
 * @param {string} ownerKey
 * @param {string} activeKey
 * @param {string} postingKey
 * @param {string} memoKey
 * @param {string} jsonMetadata
 * @param {string} extensions
 * @param {function} callback
 */
window.SteemSecure.broadcast.accountCreateWithDelegation = function (wif, fee, delegation, creator, newAccountName, ownerKey, activeKey, postingKey, memoKey, jsonMetadata, extensions, callback) {
  let params = {
    wif,
    fee,
    delegation,
    creator,
    newAccountName,
    ownerKey,
    activeKey,
    postingKey,
    memoKey,
    jsonMetadata,
    extensions
  };
  sseRequest.send("steem.broadcast.accountCreateWithDelegation", params, callback);
};

/**
 * @param {string} delegatee
 * @param {number} vesting_shares - number with 6 points decimal precision
 * @param {function} callback
 */
window.SteemSecure.broadcast.delegateVestingShares = function (delegatee, vesting_shares, callback) {
  let params = {delegatee, vesting_shares};
  sseRequest.send("steem.broadcast.delegateVestingShares", params, callback);
};

/**
 * @param {string} ownerKey
 * @param {string} activeKey
 * @param {string} postingKey
 * @param {string} memoKey
 * @param {string} jsonMetadata
 * @param {function} callback
 */
window.SteemSecure.broadcast.accountUpdate = function (ownerKey, activeKey, postingKey, memoKey, jsonMetadata, callback) {
  let params = {ownerKey, activeKey, postingKey, memoKey, jsonMetadata};
  sseRequest.send("steem.broadcast.accountUpdate", params, callback);
};

/**
 * @param proxy
 * @param {function} callback
 */
window.SteemSecure.broadcast.accountWitnessProxy = function (proxy, callback) {
  let params = {proxy};
  sseRequest.send("steem.broadcast.accountWitnessProxy", params, callback);
};

/**
 * @param {string} witness
 * @param approve
 * @param {function} callback
 */
window.SteemSecure.broadcast.accountWitnessVote = function (witness, approve, callback) {
  let params = {witness, approve};
  sseRequest.send("steem.broadcast.accountWitnessVote", params, callback);
};

/**
 * @param challenged
 * @param requireOwner
 * @param {function} callback
 */
window.SteemSecure.broadcast.challengeAuthority = function (challenged, requireOwner, callback) {
  let params = {challenged, requireOwner};
  sseRequest.send("steem.broadcast.challengeAuthority", params, callback);
};

/**
 * @param newRecoveryAccount
 * @param extensions
 * @param {function} callback
 */
window.SteemSecure.broadcast.changeRecoveryAccount = function (newRecoveryAccount, extensions, callback) {
  let params = {newRecoveryAccount, extensions};
  sseRequest.send("steem.broadcast.changeRecoveryAccount", params, callback);
};

/**
 * @param {string} parentAuthor
 * @param {string} parentPermlink
 * @param {string} permlink
 * @param {string} title
 * @param {string} body
 * @param {string} body
 * @param {string} jsonMetadata
 * @param {function} callback
 */
window.SteemSecure.broadcast.comment = function (parentAuthor, parentPermlink, permlink, title, body, jsonMetadata, callback) {
  let params = {parentAuthor, parentPermlink, permlink, title, body, jsonMetadata};
  sseRequest.send("steem.broadcast.comment", params, callback);
};

/**
 * @param {string} permlink
 * @param {number} maxAcceptedPayout
 * @param {string} percentSteemDollars
 * @param allowVotes
 * @param allowCurationRewards
 * @param extensions
 * @param {function} callback
 */
window.SteemSecure.broadcast.commentOptions = function (permlink, maxAcceptedPayout, percentSteemDollars, allowVotes, allowCurationRewards, extensions, callback) {
  let params = {permlink, maxAcceptedPayout, percentSteemDollars, allowVotes, allowCurationRewards, extensions};
  sseRequest.send("steem.broadcast.commentOptions", params, callback);
};

/**
 * @param {string} permlink
 * @param {string} payout
 * @param {function} callback
 */
window.SteemSecure.broadcast.commentPayout = function (permlink, payout, callback) {
  let params = {permlink, payout};
  sseRequest.send("steem.broadcast.commentPayout", params, callback);
};

/**
 * @param {string} permlink
 * @param {number} sbdPayout
 * @param {number} vestingPayout
 * @param {function} callback
 */
window.SteemSecure.broadcast.commentReward = function (permlink, sbdPayout, vestingPayout, callback) {
  let params = {permlink, sbdPayout, vestingPayout};
  sseRequest.send("steem.broadcast.commentReward", params, callback);
};

/**
 * @param {number} requestid
 * @param {number} amount
 * @param {function} callback
 */
window.SteemSecure.broadcast.convert = function (requestid, amount, callback) {
  let params = {requestid, amount};
  sseRequest.send("steem.broadcast.convert", params, callback);
};

/**
 * @param reward
 * @param {string} commentAuthor
 * @param {string} commentPermlink
 * @param {function} callback
 */
window.SteemSecure.broadcast.curateReward = function (reward, commentAuthor, commentPermlink, callback) {
  let params = {reward, commentAuthor, commentPermlink};
  sseRequest.send("steem.broadcast.curateReward", params, callback);
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
