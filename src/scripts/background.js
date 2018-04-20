import ext from "./utils/ext";

ext.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("onMessage called");
    sendResponse("dupa");
    // if(request.action === "perform-save") {
    //   console.log("Extension Type: ", "/* @echo extension */");
    //   console.log("PERFORM AJAX", request.data);
    //
    //   sendResponse({ action: "saved" });
    // }
  }
);

ext.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    console.log("onMessageExternal called");
    sendResponse({dupa:"dupa"});
    // if(request.action === "perform-save") {
    //   console.log("Extension Type: ", "/* @echo extension */");
    //   console.log("PERFORM AJAX", request.data);
    //
    //   sendResponse({ action: "saved" });
    // }
  }
);

console.log('asdasdasdasdasdasdasd');