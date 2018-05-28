import ext from "../utils/ext";

export class BackgroundServer{

  constructor() {
    this.routes = {};
    ext.runtime.onMessage.addListener(
      function (request, sender, response) {
        request.id = Math.random().toString(36).substr(2, 9);
        if (this.routes[request.route]) {
          this.routes[request.route](request, response);
        }
        else {
          throw new Error("Route does not exist");
        }
        return true;
      }.bind(this));
  }

  /**
   * @param {string} route
   * @param {function(request, response)} callback
   */
  on(route, callback){
    this.routes[route] = callback;
  }
}