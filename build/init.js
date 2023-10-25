"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("dotenv/config");
require("@babel/plugin-transform-runtime");
require("regenerator-runtime");
require("./db");
require("./models/User");
require("./models/Counter");
require("./models/Survey");
var _server = _interopRequireDefault(require("./server"));
;
var PORT = process.env.PORT || 7000;
var handleListening = function handleListening() {
  return console.log("Server listening on port ".concat(PORT));
};
_server["default"].listen(PORT, handleListening);