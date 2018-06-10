import ext from "../utils/ext";

/**
 * BackgroundRequest
 * Script wraps extension sendMessage method to avoid unnecessary code writing
 */

export class BackgroundRequest{

  static send(route, params, onRequestDone){
    ext.runtime.sendMessage({route, params}, function(params) {
      onRequestDone(params);
      return true;
    });
  }
}