"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _adminController = require("../controllers/adminController");
var _userRouter = _interopRequireDefault(require("./userRouter"));
var adminRouter = _express["default"].Router();
adminRouter.get("/", _adminController.admin);
adminRouter.route("/MKsurvey").get(_adminController.getMkSurvey).post(_adminController.postMKSurvey);
var _default = exports["default"] = adminRouter;