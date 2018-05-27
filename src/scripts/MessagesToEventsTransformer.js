import ext from "./utils/ext";

export class MessagesToEventsTransformer{
  constructor(){

    let event = document.createEvent('CustomEvent');

    ext.runtime.onMessage.addListener((msgObj) => {
      event.initCustomEvent(msgObj.messageName, true, true, msgObj.params);
      document.dispatchEvent(event);
      return true;
    });
  }
}