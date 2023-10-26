"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _mongoose = _interopRequireDefault(require("mongoose"));
require("dotenv").config();
_mongoose["default"].connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = _mongoose["default"].connection;
var handleOpen = function handleOpen() {
  return console.log("connected to DB");
};
var handleError = function handleError(error) {
  return console.log("DB Error", error);
};
db.on("error", handleError);
db.once("open", handleOpen);