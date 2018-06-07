![SteemSecureLoginGitHubHeader.png](https://steemitimages.com/DQmPYG42Mc9MBmsirUJpnhPREs3i7314EWjDPMkMYv1WieK/SteemSecureLoginGitHubHeader.png)

<div align="center">
  <h1>
    Steem Secure Login - Browsers Extension
  </h1>
  <h4>Decentralized block signing solution<h4>
</div>
<div align="center">
  <p>
    Browsers Extension gives third parties interface to sign transactions without knowing private keys or 
    giving any user account privalage.
  </p>
  <p>
    Extension injects into web page script which creates programming interface to interact with steem blockchain.
    No calculation are being done in injected script! Script communicates with extension which performs calculations.
    Web page javascript thread is being releived from  complex cryptographic computations.
  </p>
  <p>
  Project used "Extension Boilerplate" at its preliminary setup:
  https://github.com/EmailThis/extension-boilerplate
  </p>
</div>

<div align="center">
  <h1>Video Tutorial</h1>
  https://youtu.be/QBgyTL1_7p4
</div>

<div align="center">
  <h1>
    Steem Secure Login - How To Install
  </h1>
</div>
<div align="center">

<p><b>As long as there is no released version to install this extension you've got to build project.</b></p>

<p>

  1. npm install
  
  2. npm run build
  
  3. Now choose browser and procceed with online guidelines to: "temporarily install an extension for testing and debugging"
   In build folder you will find created by previous command corresponding extensions code.

</p>
</div>

<div align="center">
  <h1>
    How to use:
  </h1>
  
  1. Login through the popup into extension.

  2. Open developer console (in chrome F12)
  
  3. Type for example this line of code:
  ```
  SteemSecure.broadcast.transfer("bartosz546", "1.000 STEEM", "", function(err,res){console.log(err,res)});
  ```
  This line will send 1 STEEM to bartosz546 transaction signing proccess wil take place deep into the extension. 
  Browser does not have access to it.
  
  <p>
  Extension extends 'window' property of the browser with SteemSecure interface, it moves all computatiations to another javascript thread relieving webpage javascript thread. 
  After you install extension in your browser SteemSecure interface will be automatically added, you don't need to do anything more.
  SteemSecure interface is similar to steem-js library interface, if you encounter problem with some method functionality you can safely look for similar problem
  solution for steem-js method.
  </p>
</div>

<div>
  <h1>
    API DOCUMENTATION
  </h1>
  
  ##### API similar to steem-js! If some method throws error or you don't know how to use it look for tutorials for steem-js library.
  
</div>

## SteemSecure Authentication
These methods let you listen on moment when the user login or logout from the extension
### Moment when the users sucessfully submit form
```
SteemSecure.authentication.subscribeOnLogin(function(username){
  console.log(username);
});
```
### Subscription resignation
```
SteemSecure.authentication.unSubscribeOnLogin(function(username){
  console.log(username);
});
```
### Moment when the users log out from extension
```
SteemSecure.authentication.subscribeOnLogout(function(){
  
});
```
### Subscription resignation
```
SteemSecure.authentication.unSubscribeOnLogout(function(username){
  console.log(username);
});
```
### Method to check user name and if he is already logged in
```
SteemSecure.authentication.isUserLoggedIn(function(isLoggedIn, username){
  console.log(isLoggedIn, username);
  //example: true, bartosz546
});
```

## Config
Default config should work with steem. however you can change it to work with golos
as 
```js
SteemSecure.api.setOptions({ url: 'wss://ws.golos.io' }); // assuming websocket is work at ws.golos.io
SteemSecure.config.set('address_prefix','GLS');
SteemSecure.config.set('chain_id','782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12');
```
### set
```
SteemSecure.config.set('address_prefix','STM');
```
### get
```
SteemSecure.config.get('chain_id', function(err, res){
  console.log(err, result);
});
```

## Tags

### Get Trending Tags
```
SteemSecure.api.getTrendingTags(afterTag, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Trending
```
SteemSecure.api.getDiscussionsByTrending(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Created
```
SteemSecure.api.getDiscussionsByCreated(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Active
```
SteemSecure.api.getDiscussionsByActive(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Cashout
```
SteemSecure.api.getDiscussionsByCashout(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Payout
```
SteemSecure.api.getDiscussionsByPayout(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Votes
```
SteemSecure.api.getDiscussionsByVotes(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Children
```
SteemSecure.api.getDiscussionsByChildren(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Hot
```
SteemSecure.api.getDiscussionsByHot(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Feed
```
SteemSecure.api.getDiscussionsByFeed(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Blog
```
SteemSecure.api.getDiscussionsByBlog(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Comments
```
SteemSecure.api.getDiscussionsByComments(query, function(err, result) {
  console.log(err, result);
});
```

## Blocks and transactions

### Get Block Header
```
SteemSecure.api.getBlockHeader(blockNum, function(err, result) {
  console.log(err, result);
});
```
### Get Block
```
SteemSecure.api.getBlock(blockNum, function(err, result) {
  console.log(err, result);
});
```
### Get State
```
SteemSecure.api.getState(path, function(err, result) {
  console.log(err, result);
});
```
### Get Trending Categories
```
SteemSecure.api.getTrendingCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Best Categories
```
SteemSecure.api.getBestCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Active Categories
```
SteemSecure.api.getActiveCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Recent Categories
```
SteemSecure.api.getRecentCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```

## Globals

### Get Config
```
SteemSecure.api.getConfig(function(err, result) {
  console.log(err, result);
});
```
### Get Dynamic Global Properties
```
SteemSecure.api.getDynamicGlobalProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Chain Properties
```
SteemSecure.api.getChainProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Feed History
```
SteemSecure.api.getFeedHistory(function(err, result) {
  console.log(err, result);
});
```
### Get Current Median History Price
```
SteemSecure.api.getCurrentMedianHistoryPrice(function(err, result) {
  console.log(err, result);
});
```
### Get Hardfork Version
```
SteemSecure.api.getHardforkVersion(function(err, result) {
  console.log(err, result);
});
```
### Get Next Scheduled Hardfork
```
SteemSecure.api.getNextScheduledHardfork(function(err, result) {
  console.log(err, result);
});
```
### Get Reward Fund
```
SteemSecure.api.getRewardFund(name, function(err, result) {
  console.log(err, result);
});
```
### Get Vesting Delegations
```
SteemSecure.api.getVestingDelegations(account, from, limit, function(err, result) {
  console.log(err, result);
});
```

## Keys

### Get Key References
```
SteemSecure.api.getKeyReferences(key, function(err, result) {
  console.log(err, result);
});
```

## Accounts

### Get Accounts
```
SteemSecure.api.getAccounts(names, function(err, result) {
  console.log(err, result);
});
```
### Get Account References
```
SteemSecure.api.getAccountReferences(accountId, function(err, result) {
  console.log(err, result);
});
```
### Lookup Account Names
```
SteemSecure.api.lookupAccountNames(accountNames, function(err, result) {
  console.log(err, result);
});
```
### Lookup Accounts
```
SteemSecure.api.lookupAccounts(lowerBoundName, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Account Count
```
SteemSecure.api.getAccountCount(function(err, result) {
  console.log(err, result);
});
```
### Get Conversion Requests
```
SteemSecure.api.getConversionRequests(accountName, function(err, result) {
  console.log(err, result);
});
```
### Get Account History
```
SteemSecure.api.getAccountHistory(account, from, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Owner History
```
SteemSecure.api.getOwnerHistory(account, function(err, result) {
  console.log(err, result);
});
```
### Get Recovery Request
```
SteemSecure.api.getRecoveryRequest(account, function(err, result) {
  console.log(err, result);
});
```

## Market

### Get Order Book
```
SteemSecure.api.getOrderBook(limit, function(err, result) {
  console.log(err, result);
});
```
### Get Open Orders
```
SteemSecure.api.getOpenOrders(owner, function(err, result) {
  console.log(err, result);
});
```
### Get Liquidity Queue
```
SteemSecure.api.getLiquidityQueue(startAccount, limit, function(err, result) {
  console.log(err, result);
});
```

## Authority / validation

### Get Transaction Hex
```
SteemSecure.api.getTransactionHex(trx, function(err, result) {
  console.log(err, result);
});
```
### Get Transaction
```
SteemSecure.api.getTransaction(trxId, function(err, result) {
  console.log(err, result);
});
```
### Get Required Signatures
```
SteemSecure.api.getRequiredSignatures(trx, availableKeys, function(err, result) {
  console.log(err, result);
});
```
### Get Potential Signatures
```
SteemSecure.api.getPotentialSignatures(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Authority
```
SteemSecure.api.verifyAuthority(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Account Authority
```
SteemSecure.api.verifyAccountAuthority(nameOrId, signers, function(err, result) {
  console.log(err, result);
});
```

## Votes

### Get Active Votes
```
SteemSecure.api.getActiveVotes(author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Get Account Votes
```
SteemSecure.api.getAccountVotes(voter, function(err, result) {
  console.log(err, result);
});
```

## Content


### Get Content
```
SteemSecure.api.getContent(author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Get Content Replies
```
SteemSecure.api.getContentReplies(author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Author Before Date
```
SteemSecure.api.getDiscussionsByAuthorBeforeDate(author, startPermlink, beforeDate, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Replies By Last Update
```
SteemSecure.api.getRepliesByLastUpdate(startAuthor, startPermlink, limit, function(err, result) {
  console.log(err, result);
});
```

## Witnesses


### Get Witnesses
```
SteemSecure.api.getWitnesses(witnessIds, function(err, result) {
  console.log(err, result);
});
```
### Get Witness By Account
```
SteemSecure.api.getWitnessByAccount(accountName, function(err, result) {
  console.log(err, result);
});
```
### Get Witnesses By Vote
```
SteemSecure.api.getWitnessesByVote(from, limit, function(err, result) {
  console.log(err, result);
});
```
### Lookup Witness Accounts
```
SteemSecure.api.lookupWitnessAccounts(lowerBoundName, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Witness Count
```
SteemSecure.api.getWitnessCount(function(err, result) {
  console.log(err, result);
});
```
### Get Active Witnesses
```
SteemSecure.api.getActiveWitnesses(function(err, result) {
  console.log(err, result);
});
```
### Get Miner Queue
```
SteemSecure.api.getMinerQueue(function(err, result) {
  console.log(err, result);
});
```

## Follow API

### Get Followers
```
SteemSecure.api.getFollowers(following, startFollower, followType, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Following
```
SteemSecure.api.getFollowing(follower, startFollowing, followType, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Follow Count
```
SteemSecure.api.getFollowCount(account, function(err, result) {
  console.log(err, result);
});
```

## Broadcast API

### Broadcast Transaction Synchronous
```
SteemSecure.api.broadcastTransactionSynchronous(trx, function(err, result) {
  console.log(err, result);
});
```
### Broadcast Block
```
SteemSecure.api.broadcastBlock(b, function(err, result) {
  console.log(err, result);
});
```

# Broadcast

### Account Create
```
SteemSecure.broadcast.accountCreate(wif, fee, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Account Create With Delegation
```
SteemSecure.broadcast.accountCreateWithDelegation(wif, fee, delegation, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, extensions, function(err, result) {
  console.log(err, result);
});
```
### Delegate Vesting Shares
```
SteemSecure.broadcast.delegateVestingShares(delegatee, vesting_shares, function(err, result) {
  console.log(err, result);
});
//Delegates about 4.920 STEEM to Bartosz546
SteemSecure.broadcast.delegateVestingShares("bartosz546", "10000.000000 VESTS", function(e,r){console.log(e,r)});

```
### Account Update
```
SteemSecure.broadcast.accountUpdate(owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Account Witness Proxy
```
SteemSecure.broadcast.accountWitnessProxy(proxy, function(err, result) {
  console.log(err, result);
});
```
### Account Witness Vote
```
SteemSecure.broadcast.accountWitnessVote(witness, approve, function(err, result) {
  console.log(err, result);
});
```
### Challenge Authority
```
SteemSecure.broadcast.challengeAuthority(challenged, requireOwner, function(err, result) {
  console.log(err, result);
});
```
### Change Recovery Account
```
SteemSecure.broadcast.changeRecoveryAccount(accountToRecover, newRecoveryAccount, extensions, function(err, result) {
  console.log(err, result);
});
```

### PostOrComment
```
SteemSecure.broadcast.comment(parentAuthor, parentPermlink, permlink, title, body, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### PostOrComment Options
```
SteemSecure.broadcast.commentOptions(permlink, maxAcceptedPayout, percentSteemDollars, allowVotes, allowCurationRewards, extensions, function(err, result) {
  console.log(err, result);
});
```
### PostOrComment Payout
```
SteemSecure.broadcast.commentPayout(permlink, payout, function(err, result) {
  console.log(err, result);
});
```
### PostOrComment Reward
```
SteemSecure.broadcast.commentReward(permlink, sbdPayout, vestingPayout, function(err, result) {
  console.log(err, result);
});
```
### Convert
```
SteemSecure.broadcast.convert(requestid, amount, function(err, result) {
  console.log(err, result);
});
```
### Curate Reward
```
SteemSecure.broadcast.curateReward(reward, commentAuthor, commentPermlink, function(err, result) {
  console.log(err, result);
});
```
### Custom
```
SteemSecure.broadcast.custom(requiredAuths, id, data, function(err, result) {
  console.log(err, result);
});
```
### Custom Binary
```
SteemSecure.broadcast.customBinary(id, data, function(err, result) {
  console.log(err, result);
});
```
### Custom Json
```
SteemSecure.broadcast.customJson(requiredAuths, requiredPostingAuths, id, json, function(err, result) {
  console.log(err, result);
});
```
### Delete PostOrComment
```
SteemSecure.broadcast.deleteComment(permlink, function(err, result) {
  console.log(err, result);
  //Delete post or comment with permlink: "re-comment-bartosz546-test-steem-secure"
  SteemSecure.broadcast.deleteComment("re-comment-bartosz546-test-steem-secure", function(e,r){console.log(e,r)});
});
```
### Escrow Dispute
```
SteemSecure.broadcast.escrowDispute(to, agent, who, escrowId, function(err, result) {
  console.log(err, result);
});
```
### Escrow Release
```
SteemSecure.broadcast.escrowRelease(to, agent, who, receiver, escrowId, sbdAmount, steemAmount, function(err, result) {
  console.log(err, result);
});
```
### Escrow Transfer
```
SteemSecure.broadcast.escrowTransfer(to, agent, escrowId, sbdAmount, steemAmount, fee, ratificationDeadline, escrowExpiration, jsonMeta, function(err, result) {
  console.log(err, result);
});
```
### Feed Publish
```
SteemSecure.broadcast.feedPublish(exchangeRate, function(err, result) {
  console.log(err, result);
});
```
### Pow2
```
SteemSecure.broadcast.pow2(work, newOwnerKey, props, function(err, result) {
  console.log(err, result);
});
```
### Fill Convert Request
```
SteemSecure.broadcast.fillConvertRequest(requestid, amountIn, amountOut, function(err, result) {
  console.log(err, result);
});
```
### Fill Order
```
SteemSecure.broadcast.fillOrder(currentOrderid, currentPays, openOwner, openOrderid, openPays, function(err, result) {
  console.log(err, result);
});
```
### Fill Vesting Withdraw
```
SteemSecure.broadcast.fillVestingWithdraw(toAccount, withdrawn, deposited, function(err, result) {
  console.log(err, result);
});
```
### Interest
```
SteemSecure.broadcast.interest(interest, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Cancel
```
SteemSecure.broadcast.limitOrderCancel(orderid, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Create
```
SteemSecure.broadcast.limitOrderCreate(orderid, amountToSell, minToReceive, fillOrKill, expiration, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Create2
```
SteemSecure.broadcast.limitOrderCreate2(orderid, amountToSell, exchangeRate, fillOrKill, expiration, function(err, result) {
  console.log(err, result);
});
```
### Liquidity Reward
```
SteemSecure.broadcast.liquidityReward(payout, function(err, result) {
  console.log(err, result);
});
```
### Pow
```
SteemSecure.broadcast.pow(worker, input, signature, work, function(err, result) {
  console.log(err, result);
});
```
### Prove Authority
```
SteemSecure.broadcast.proveAuthority(requireOwner, function(err, result) {
  console.log(err, result);
});
```
### Recover Account
```
SteemSecure.broadcast.recoverAccount(newOwnerAuthority, recentOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```
### Report Over Production
```
SteemSecure.broadcast.reportOverProduction(firstBlock, secondBlock, function(err, result) {
  console.log(err, result);
});
```
### Request Account Recovery
```
SteemSecure.broadcast.requestAccountRecovery(accountToRecover, newOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```
### Escrow Approve
```
SteemSecure.broadcast.escrowApprove(to, agent, who, escrowId, approve, function(err, result) {
  console.log(err, result);
});
```
### Set Withdraw Vesting Route
```
SteemSecure.broadcast.setWithdrawVestingRoute(toAccount, percent, autoVest, function(err, result) {
  console.log(err, result);
});
```
### Transfer
```
SteemSecure.broadcast.transfer(to, amount, memo, function(err, result) {
  console.log(err, result);
  // Send 0.001 STEEM to bartosz546
  SteemSecure.broadcast.transfer("bartosz546", "0.001 STEEM", "Steem Secure", function(e,r){console.log(e,r)});
});
```
### Transfer To Vesting
```
SteemSecure.broadcast.transferToVesting(to, amount, function(err, result) {
  console.log(err, result);
});
```
### Vote
```
SteemSecure.broadcast.vote(author, permlink, weight, function(err, result) {
  console.log(err, result);
});
//Vote with 100% power on bartosz546 post
SteemSecure.broadcast.vote("bartosz546", "re-bartosz546-bartosz546-test-steem-secure-20180601t165611870z", 10000, function(e,r){console.log(e,r)});
```
### Withdraw Vesting
```
SteemSecure.broadcast.withdrawVesting(vestingShares, function(err, result) {
  console.log(err, result);
});
```
### Witness Update
```
SteemSecure.broadcast.witnessUpdate(url, blockSigningKey, props, fee, function(err, result) {
  console.log(err, result);
});
```
### Fill Vesting Withdraw
```
SteemSecure.broadcast.fillVestingWithdraw(toAccount, withdrawn, deposited, function(err, result) {
  console.log(err, result);
});
```
### Fill Order
```
SteemSecure.broadcast.fillOrder(currentOrderid, currentPays, openOwner, openOrderid, openPays, function(err, result) {
  console.log(err, result);
});
```
### Fill Transfer From Savings
```
SteemSecure.broadcast.fillTransferFromSavings(to, amount, requestId, memo, function(err, result) {
  console.log(err, result);
});
```
### PostOrComment Payout
```
SteemSecure.broadcast.commentPayout(permlink, payout, function(err, result) {
  console.log(err, result);
});
```
### Transfer To Savings
```
SteemSecure.broadcast.transferToSavings(to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Transfer From Savings
```
SteemSecure.broadcast.transferFromSavings(requestId, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Cancel Transfer From Savings
```
SteemSecure.broadcast.cancelTransferFromSavings(requestId, function(err, result) {
  console.log(err, result);
});
```

# Formatter

### PostOrComment Permlink
```
var parentAuthor = 'ned';
var parentPermlink = 'a-selfie';
steem.formatter.commentPermlink(parentAuthor, parentPermlink, function(err,commentPermlink){
  console.log(commentPermlink);
  // => 're-ned-a-selfie-20170621t080403765z'
});
```

### Estimate Account Value
```
SteemSecure.formatter.estimateAccountValue(account, function(err,steemPower){
  console.log(steemPower);
);
```

### Reputation
```
SteemSecure.formatter.reputation(amount, function(err,reputation){
console.log(reputation);
});
/**
 *Example:
*/
SteemSecure.formatter.reputation(2684375104736, function(err,reputation){
console.log(reputation);
// => 56
});
```

### Vest To Steem
```
var steemPower = SteemSecure.formatter.vestToSteem(vestingShares, totalVestingShares, totalVestingFundSteem, function(err,reputation){
  console.log(steemPower);
});
```
