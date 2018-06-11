export class SSERequest{

  constructor(){
    this.routes= {};
    window.addEventListener("message", function (data) {
      if(data.data.route && this.routes[data.data.route].onRequest && !data.data.sender) {
        this.routes[data.data.route].onRequest(data.data.errorSerializable, data.data.params);
        delete this.routes[data.data.route].onRequest;
      }
      else if(data.data.route && !this.routes[data.data.route].onRequest){
        console.warn("You didn't use callback property, it may cause raise condition.");
      }
    }.bind(this));
  }

  send(route, params, onRequestDone){
    this.routes[route]={};
    this.routes[route].onRequest = onRequestDone;

    window.postMessage({route: route, params: params, sender: true}, window.location);
  }
}
