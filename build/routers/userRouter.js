"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../controllers/userController.js");
var userRouter = _express["default"].Router();
userRouter.get("/", _userController.home);
userRouter.route("/login").get(_userController.getLogin).post(_userController.postLogin);
userRouter.route("/:id([0-9a-f]{24})/survey").get(_userController.getSurvey).post(_userController.postSurvey);
userRouter.get("/:id([0-9a-f]{24})/result", _userController.result);
var _default = exports["default"] = userRouter;