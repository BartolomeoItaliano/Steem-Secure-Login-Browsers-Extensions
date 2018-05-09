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
