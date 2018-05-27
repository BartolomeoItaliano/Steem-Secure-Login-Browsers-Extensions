import ext from "../utils/ext";

export class BackgroundServer{

  constructor() {
    this.routes = {};
    ext.runtime.onMessage.addListener(
      function (request, sender, response) {
        request.params.tab = sender.tab;
        if (this.routes[request.route]) {
          this.routes[request.route](request.params, response);
        }
        else {
          throw new Error("Route does not exist");
        }
        return true;
      }.bind(this));
  }

  /**
   * @param {string} route
   * @param {function} callback
   */
  on(route, callback){
    this.routes[route] = callback;
  }
}