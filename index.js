var io = require("socket.io-client");
var socket = io.connect("socket.coincap.io");
socket.on("trades", function(msg){
  console.log(msg);
});
