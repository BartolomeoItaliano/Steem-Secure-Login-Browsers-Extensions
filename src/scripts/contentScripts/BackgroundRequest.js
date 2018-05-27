import ext from "../utils/ext";

export class BackgroundRequest{
  constructor(){

  }

  send(route, params, onRequestDone){
    ext.runtime.sendMessage({route, params}, function(response) {
      console.log(response);
      onRequestDone(response.params);
      return true;
    });
  }
}