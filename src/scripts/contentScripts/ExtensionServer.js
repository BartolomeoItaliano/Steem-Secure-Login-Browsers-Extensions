export class ExtensionServer {
  constructor() {
    this.routes = {};

    window.addEventListener("message", function (data) {
      if(!data.data.serverMessage && data.data.route) {
        this.routes[data.data.route].onRequest(data.data.params, this.routes[data.data.route].response);
      }
    }.bind(this));
  }

  on(route, onRequest) {
    this.routes[route] = {};
    this.routes[route].onRequest = onRequest;
    this.routes[route].response = new Response(route);
  }
}

class Response {
  constructor(route) {
    this.route = route;
  }

  send(params, err) {
    let errorSerializable;

    if (err) {
      errorSerializable = {message: err.message};
    }

    window.postMessage({
      route: this.route,
      params: params,
      errorSerializable: errorSerializable,
      serverMessage: true
    }, window.location);
  }
}
