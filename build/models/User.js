"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
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