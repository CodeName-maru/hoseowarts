"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.admin = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _User = _interopRequireDefault(require("../models/User"));
var _Survey = _interopRequireDefault(require("../models/Survey"));
var admin = exports.admin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var users, griffindor, slyderin, huffulepuff, ravenclaw;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _User["default"].find({}).sort({
            createdAt: "desc"
          });
        case 2:
          users = _context.sent;
          _context.next = 5;
          return _User["default"].countDocuments({
            result: 1
          });
        case 5:
          griffindor = _context.sent;
          _context.next = 8;
          return _User["default"].countDocuments({
            result: 2
          });
        case 8:
          slyderin = _context.sent;
          _context.next = 11;
          return _User["default"].countDocuments({
            result: 3
          });
        case 11:
          huffulepuff = _context.sent;
          _context.next = 14;
          return _User["default"].countDocuments({
            result: 4
          });
        case 14:
          ravenclaw = _context.sent;
          return _context.abrupt("return", res.render("admin", {
            users: users,
            griffindor: griffindor,
            slyderin: slyderin,
            huffulepuff: huffulepuff,
            ravenclaw: ravenclaw
          }));
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function admin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();