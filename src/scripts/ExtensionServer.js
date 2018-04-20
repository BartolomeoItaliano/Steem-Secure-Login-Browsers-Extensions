
export class ExtensionServer{
  constructor(){
    this.routes = {};
    this.event = document.createEvent('CustomEvent');

    document.addEventListener("SSERequest", function (data) {
      console.log("dupa");
      this.routes[data.detail.route].onRequest(data.detail.params, this.routes[data.detail.route].response);
    }.bind(this));
  }

  on(route, onRequest){
    this.routes[route]={};
    this.routes[route].onRequest=onRequest;
    this.routes[route].response= new Response(route);
  }
}

class Response{
  constructor(route){
    this.route = route;
    this.event = document.createEvent('CustomEvent');
  }
  send(params){
    this.event.initCustomEvent("SSERequestDone", true, true, {route: this.route, params: params});
    document.dispatchEvent(this.event);
  }
}