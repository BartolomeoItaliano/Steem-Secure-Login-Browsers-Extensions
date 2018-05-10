export class SSERequest{

  constructor(){
    this.routes= {};
    this.event = document.createEvent('CustomEvent');
    document.addEventListener("SSERequestDone", function (data) {
      if(this.routes[data.detail.route].onRequest) {
        this.routes[data.detail.route].onRequest(data.detail.errorSerializable, data.detail.params);
        delete this.routes[data.detail.route].onRequest;
      }
      else{
        console.warn("You didn't use callback property, it may cause raise condition.");
      }
    }.bind(this));
  }

  send(route, params, onRequestDone){
    this.routes[route]={};
    this.routes[route].onRequest = onRequestDone;

    this.event.initCustomEvent("SSERequest", true, true, {route: route, params: params});
    document.dispatchEvent(this.event);
  }
}