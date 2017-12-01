// Websockets server command:

// node js/ws-osc-relay.js
// optional args: INCOMING_PORT OUTGOING_PORT (57121 4559)

const WEBSOCKETS_URL = "ws://localhost:8081";

var app = app || {};

if( (typeof app.oscHandler) !== "function" ){
  // avoid errors by defining an empty function if our main JS file hasn't defined one
  app.oscHandler = function(){};
}

var oscPort = new osc.WebSocketPort({
    url: WEBSOCKETS_URL,
    metadata: true
});

oscPort.open();

oscPort.on("ready", function () {
  oscPort.on("message", function (oscMsg) {
    console.log("Got OSC message", oscMsg );

    // Forward all OSC messages to handler defined in main JS app
    app.oscHandler(oscMsg.address, oscMsg.args);

    // if( oscMsg.address === "/step" ){
    //   // console.log("/step received");
    // }

  });
});
