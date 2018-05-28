import ext from "../utils/ext";

export class BackgroundRequest{
  constructor(){

  }

  send(route, params, onRequestDone){
    ext.runtime.sendMessage({route, params}, function(params) {
      console.log(params);
      onRequestDone(params);
      return true;
    });
  }
}