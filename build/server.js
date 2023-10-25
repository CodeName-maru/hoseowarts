"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _userRouter = _interopRequireDefault(require("./routers/userRouter"));
var _adminRouter = _interopRequireDefault(require("./routers/adminRouter"));
require("dotenv").config();
var app = (0, _express["default"])();
var logger = (0, _morgan["default"])('dev');
var path = require('path');
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/static", _express["default"]["static"]("assets"));
app.use("/", _userRouter["default"]);
app.use("/admin", _adminRouter["default"]);
var _default = exports["default"] = app;