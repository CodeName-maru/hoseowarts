"use strict";

require("regenerator-runtime");
require("./db");
require("./models/User");
var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
;
var PORT = 7000;
var handleListening = function handleListening() {
  return console.log("Server listening on port ".concat(PORT));
};
_server["default"].listen(PORT, handleListening);