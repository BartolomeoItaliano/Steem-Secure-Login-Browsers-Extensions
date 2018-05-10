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
    No calculation are being done in this script! Script communicates with extension which performs calculations.
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

</div>

<div>
  <h1>
    API DOCUMENTATION
  </h1>
  
  ##### API similar to steem-js! If some method throws error or you don't know how to use it look for tutorials for steem-js library.
  
</div>

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
SteemSecure.config.get('chain_id');
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
steem.api.getConfig(function(err, result) {
  console.log(err, result);
});
```
### Get Dynamic Global Properties
```
steem.api.getDynamicGlobalProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Chain Properties
```
steem.api.getChainProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Feed History
```
steem.api.getFeedHistory(function(err, result) {
  console.log(err, result);
});
```
### Get Current Median History Price
```
steem.api.getCurrentMedianHistoryPrice(function(err, result) {
  console.log(err, result);
});
```
### Get Hardfork Version
```
steem.api.getHardforkVersion(function(err, result) {
  console.log(err, result);
});
```
### Get Next Scheduled Hardfork
```
steem.api.getNextScheduledHardfork(function(err, result) {
  console.log(err, result);
});
```
### Get Reward Fund
```
steem.api.getRewardFund(name, function(err, result) {
  console.log(err, result);
});
```
### Get Vesting Delegations
```
steem.api.getVestingDelegations(account, from, limit, function(err, result) {
  console.log(err, result);
});
```

## Keys

### Get Key References
```
steem.api.getKeyReferences(key, function(err, result) {
  console.log(err, result);
});
```

## Accounts

### Get Accounts
```
steem.api.getAccounts(names, function(err, result) {
  console.log(err, result);
});
```
### Get Account References
```
steem.api.getAccountReferences(accountId, function(err, result) {
  console.log(err, result);
});
```
### Lookup Account Names
```
steem.api.lookupAccountNames(accountNames, function(err, result) {
  console.log(err, result);
});
```
### Lookup Accounts
```
steem.api.lookupAccounts(lowerBoundName, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Account Count
```
steem.api.getAccountCount(function(err, result) {
  console.log(err, result);
});
```
### Get Conversion Requests
```
steem.api.getConversionRequests(accountName, function(err, result) {
  console.log(err, result);
});
```
### Get Account History
```
steem.api.getAccountHistory(account, from, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Owner History
```
steem.api.getOwnerHistory(account, function(err, result) {
  console.log(err, result);
});
```
### Get Recovery Request
```
steem.api.getRecoveryRequest(account, function(err, result) {
  console.log(err, result);
});
```

## Market

### Get Order Book
```
steem.api.getOrderBook(limit, function(err, result) {
  console.log(err, result);
});
```
### Get Open Orders
```
steem.api.getOpenOrders(owner, function(err, result) {
  console.log(err, result);
});
```
### Get Liquidity Queue
```
steem.api.getLiquidityQueue(startAccount, limit, function(err, result) {
  console.log(err, result);
});
```

## Authority / validation

### Get Transaction Hex
```
steem.api.getTransactionHex(trx, function(err, result) {
  console.log(err, result);
});
```
### Get Transaction
```
steem.api.getTransaction(trxId, function(err, result) {
  console.log(err, result);
});
```
### Get Required Signatures
```
steem.api.getRequiredSignatures(trx, availableKeys, function(err, result) {
  console.log(err, result);
});
```
### Get Potential Signatures
```
steem.api.getPotentialSignatures(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Authority
```
steem.api.verifyAuthority(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Account Authority
```
steem.api.verifyAccountAuthority(nameOrId, signers, function(err, result) {
  console.log(err, result);
});
```

## Votes

### Get Active Votes
```
steem.api.getActiveVotes(author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Get Account Votes
```
steem.api.getAccountVotes(voter, function(err, result) {
  console.log(err, result);
});
```

## Content


### Get Content
```
steem.api.getContent(author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Get Content Replies
```
steem.api.getContentReplies(author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Author Before Date
```
steem.api.getDiscussionsByAuthorBeforeDate(author, startPermlink, beforeDate, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Replies By Last Update
```
steem.api.getRepliesByLastUpdate(startAuthor, startPermlink, limit, function(err, result) {
  console.log(err, result);
});
```

## Witnesses


### Get Witnesses
```
steem.api.getWitnesses(witnessIds, function(err, result) {
  console.log(err, result);
});
```
### Get Witness By Account
```
steem.api.getWitnessByAccount(accountName, function(err, result) {
  console.log(err, result);
});
```
### Get Witnesses By Vote
```
steem.api.getWitnessesByVote(from, limit, function(err, result) {
  console.log(err, result);
});
```
### Lookup Witness Accounts
```
steem.api.lookupWitnessAccounts(lowerBoundName, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Witness Count
```
steem.api.getWitnessCount(function(err, result) {
  console.log(err, result);
});
```
### Get Active Witnesses
```
steem.api.getActiveWitnesses(function(err, result) {
  console.log(err, result);
});
```
### Get Miner Queue
```
steem.api.getMinerQueue(function(err, result) {
  console.log(err, result);
});
```

## Follow API

### Get Followers
```
steem.api.getFollowers(following, startFollower, followType, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Following
```
steem.api.getFollowing(follower, startFollowing, followType, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Follow Count
```
steem.api.getFollowCount(account, function(err, result) {
  console.log(err, result);
});
```

## Broadcast API

### Broadcast Transaction Synchronous
```
steem.api.broadcastTransactionSynchronous(trx, function(err, result) {
  console.log(err, result);
});
```
### Broadcast Block
```
steem.api.broadcastBlock(b, function(err, result) {
  console.log(err, result);
});
```

# Broadcast

### Account Create
```
steem.broadcast.accountCreate(wif, fee, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Account Create With Delegation
```
steem.broadcast.accountCreateWithDelegation(wif, fee, delegation, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, extensions, function(err, result) {
  console.log(err, result);
});
```
### Delegate Vesting Shares
```
steem.broadcast.delegateVestingShares(delegatee, vesting_shares, function(err, result) {
  console.log(err, result);
});
```
### Account Update
```
steem.broadcast.accountUpdate(owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Account Witness Proxy
```
steem.broadcast.accountWitnessProxy(wif, account, proxy, function(err, result) {
  console.log(err, result);
});
```
### Account Witness Vote
```
steem.broadcast.accountWitnessVote(witness, approve, function(err, result) {
  console.log(err, result);
});
```
### Challenge Authority
```
steem.broadcast.challengeAuthority(challenged, requireOwner, function(err, result) {
  console.log(err, result);
});
```
### Change Recovery Account
```
steem.broadcast.changeRecoveryAccount(wif, accountToRecover, newRecoveryAccount, extensions, function(err, result) {
  console.log(err, result);
});
```

### Comment
```
steem.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Comment Options
```
steem.broadcast.commentOptions(wif, author, permlink, maxAcceptedPayout, percentSteemDollars, allowVotes, allowCurationRewards, extensions, function(err, result) {
  console.log(err, result);
});
```
### Comment Payout
```
steem.broadcast.commentPayout(permlink, payout, function(err, result) {
  console.log(err, result);
});
```
### Comment Reward
```
steem.broadcast.commentReward(permlink, sbdPayout, vestingPayout, function(err, result) {
  console.log(err, result);
});
```
### Convert
```
steem.broadcast.convert(requestid, amount, function(err, result) {
  console.log(err, result);
});
```
### Curate Reward
```
steem.broadcast.curateReward(reward, commentAuthor, commentPermlink, function(err, result) {
  console.log(err, result);
});
```
### Custom
```
steem.broadcast.custom(requiredAuths, id, data, function(err, result) {
  console.log(err, result);
});
```
### Custom Binary
```
steem.broadcast.customBinary(id, data, function(err, result) {
  console.log(err, result);
});
```
### Custom Json
```
steem.broadcast.customJson(requiredAuths, requiredPostingAuths, id, json, function(err, result) {
  console.log(err, result);
});
```
### Delete Comment
```
steem.broadcast.deleteComment(permlink, function(err, result) {
  console.log(err, result);
});
```
### Escrow Dispute
```
steem.broadcast.escrowDispute(to, agent, who, escrowId, function(err, result) {
  console.log(err, result);
});
```
### Escrow Release
```
steem.broadcast.escrowRelease(to, agent, who, receiver, escrowId, sbdAmount, steemAmount, function(err, result) {
  console.log(err, result);
});
```
### Escrow Transfer
```
steem.broadcast.escrowTransfer(to, agent, escrowId, sbdAmount, steemAmount, fee, ratificationDeadline, escrowExpiration, jsonMeta, function(err, result) {
  console.log(err, result);
});
```
### Feed Publish
```
steem.broadcast.feedPublish(exchangeRate, function(err, result) {
  console.log(err, result);
});
```
### Pow2
```
steem.broadcast.pow2(wif, work, newOwnerKey, props, function(err, result) {
  console.log(err, result);
});
```
### Fill Convert Request
```
steem.broadcast.fillConvertRequest(wif, owner, requestid, amountIn, amountOut, function(err, result) {
  console.log(err, result);
});
```
### Fill Order
```
steem.broadcast.fillOrder(currentOrderid, currentPays, openOwner, openOrderid, openPays, function(err, result) {
  console.log(err, result);
});
```
### Fill Vesting Withdraw
```
steem.broadcast.fillVestingWithdraw(toAccount, withdrawn, deposited, function(err, result) {
  console.log(err, result);
});
```
### Interest
```
steem.broadcast.interest(wif, owner, interest, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Cancel
```
steem.broadcast.limitOrderCancel(orderid, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Create
```
steem.broadcast.limitOrderCreate(orderid, amountToSell, minToReceive, fillOrKill, expiration, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Create2
```
steem.broadcast.limitOrderCreate2(orderid, amountToSell, exchangeRate, fillOrKill, expiration, function(err, result) {
  console.log(err, result);
});
```
### Liquidity Reward
```
steem.broadcast.liquidityReward(payout, function(err, result) {
  console.log(err, result);
});
```
### Pow
```
steem.broadcast.pow(wif, worker, input, signature, work, function(err, result) {
  console.log(err, result);
});
```
### Prove Authority
```
steem.broadcast.proveAuthority(wif, challenged, requireOwner, function(err, result) {
  console.log(err, result);
});
```
### Recover Account
```
steem.broadcast.recoverAccount(newOwnerAuthority, recentOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```
### Report Over Production
```
steem.broadcast.reportOverProduction(firstBlock, secondBlock, function(err, result) {
  console.log(err, result);
});
```
### Request Account Recovery
```
steem.broadcast.requestAccountRecovery(accountToRecover, newOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```
### Escrow Approve
```
steem.broadcast.escrowApprove(to, agent, who, escrowId, approve, function(err, result) {
  console.log(err, result);
});
```
### Set Withdraw Vesting Route
```
steem.broadcast.setWithdrawVestingRoute(toAccount, percent, autoVest, function(err, result) {
  console.log(err, result);
});
```
### Transfer
```
steem.broadcast.transfer(to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Transfer To Vesting
```
steem.broadcast.transferToVesting(to, amount, function(err, result) {
  console.log(err, result);
});
```
### Vote
```
steem.broadcast.vote(author, permlink, weight, function(err, result) {
  console.log(err, result);
});
```
### Withdraw Vesting
```
steem.broadcast.withdrawVesting(vestingShares, function(err, result) {
  console.log(err, result);
});
```
### Witness Update
```
steem.broadcast.witnessUpdate(url, blockSigningKey, props, fee, function(err, result) {
  console.log(err, result);
});
```
### Fill Vesting Withdraw
```
steem.broadcast.fillVestingWithdraw(toAccount, withdrawn, deposited, function(err, result) {
  console.log(err, result);
});
```
### Fill Order
```
steem.broadcast.fillOrder(currentOrderid, currentPays, openOwner, openOrderid, openPays, function(err, result) {
  console.log(err, result);
});
```
### Fill Transfer From Savings
```
steem.broadcast.fillTransferFromSavings(wif, from, to, amount, requestId, memo, function(err, result) {
  console.log(err, result);
});
```
### Comment Payout
```
steem.broadcast.commentPayout(wif, author, permlink, payout, function(err, result) {
  console.log(err, result);
});
```
### Transfer To Savings
```
steem.broadcast.transferToSavings(wif, from, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Transfer From Savings
```
steem.broadcast.transferFromSavings(wif, from, requestId, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Cancel Transfer From Savings
```
steem.broadcast.cancelTransferFromSavings(requestId, function(err, result) {
  console.log(err, result);
});
```
