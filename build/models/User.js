"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userSchema = new _mongoose["default"].Schema({
  createdAt: {
    type: Date,
    required: true,
    "default": Date.now
  },
  name: String,
  answerArray: [{
    type: Number
  }],
  questNum: Number,
  result: String,
  chosenChild: Boolean
});
var User = _mongoose["default"].model("User", userSchema);
var _default = exports["default"] = User;