export class ExtensionServer {
  constructor() {
    this.routes = {};

    window.addEventListener("message", function (data) {
      if(!data.data.serverMessage && data.data.route) {
        this.routes[data.data.route].onRequest(data.data.params, new Response(data.data.id, data.data.route));
      }
    }.bind(this));
  }

  on(route, onRequest) {
    this.routes[route] = {};
    this.routes[route].onRequest = onRequest;
  }
}

class Response {
  constructor(id, route) {
    this.id = id;
    this.route = route;
  }

  send(params, err) {
    let errorSerializable;

    if (err) {
      errorSerializable = {message: err.message};
    }

    window.postMessage({
      id: this.id,
      route: this.route,
      params: params,
      errorSerializable: errorSerializable,
      serverMessage: true
    }, window.location);
  }
}
