export class SSERequest{

  constructor(){
    this.routes= {};
    window.addEventListener("message", function (data) {
      const routeWithId = data.data.route + data.data.id;
      if(data.data.route && this.routes[routeWithId].onRequest && !data.data.sender) {
        this.routes[routeWithId].onRequest(data.data.errorSerializable, data.data.params);
        delete this.routes[routeWithId].onRequest;
      }
      else if(routeWithId && !this.routes[routeWithId].onRequest){
        console.warn("You didn't use callback property, it may cause raise condition.");
      }
    }.bind(this));
  }

  send(route, params, onRequestDone){
    const id = Math.random().toString(36).substr(2, 9);
    this.routes[route+id]={};
    this.routes[route+id].onRequest = onRequestDone;

    window.postMessage({route: route, params: params, sender: true, id}, window.location);
  }
}
