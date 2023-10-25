"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.result = exports.postSurvey = exports.postLogin = exports.home = exports.getSurvey = exports.getLogin = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _User = _interopRequireDefault(require("../models/User"));
var _Survey = _interopRequireDefault(require("../models/Survey"));
var _Counter = _interopRequireDefault(require("../models/Counter"));
var _express = require("express");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function getMode(array, surveyCurrent) {
  var result = 0;
  var max = 0;
  var map1 = new Map();
  surveyCurrent.forEach(function (dorm, index) {
    if (dorm < 245) {
      map1.set(index + 1, 0);
    }
  }); //dorm이 245보다 작으면 맵 요소 생성
  array.forEach(function (element) {
    map1.set(element, map1.get(element) + 1);
    //array 순회 하며 키값에 맞는 밸루 값에 1 더하기
  });
  //맵에서 보기가 없으면 무슨일이 일어날지 몰랑 괜찮을거 같기도 하고
  var _iterator = _createForOfIteratorHelper(map1),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
        key = _step$value[0],
        value = _step$value[1];
      if (value > max) {
        max = value;
        result = key;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  console.log(map1);
  console.log(result);
  return result;
}
var home = exports.home = function home(req, res) {
  return res.render("home");
};
var getLogin = exports.getLogin = function getLogin(req, res) {
  return res.render("login");
};
var postLogin = exports.postLogin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var counter, name, user, dbUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Counter["default"].findOneAndUpdate({
            _id: "userid"
          }, {
            $inc: {
              seq: 1
            }
          }, {
            "new": true
          });
        case 2:
          counter = _context.sent;
          console.log(counter);
          name = req.body.name;
          user = new _User["default"]({
            name: name,
            answerArray: [],
            result: "",
            questNum: 1,
            chosenChild: false
          });
          _context.prev = 6;
          _context.next = 9;
          return user.save();
        case 9:
          dbUser = _context.sent;
          return _context.abrupt("return", res.redirect("/".concat(dbUser.id, "/survey")));
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](6);
          console.log(_context.t0);
          return _context.abrupt("return", res.redirect("/login"));
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[6, 13]]);
  }));
  return function postLogin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getSurvey = exports.getSurvey = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, user, survey;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.next = 3;
          return _User["default"].findById(id);
        case 3:
          user = _context2.sent;
          _context2.next = 6;
          return _Survey["default"].findOne({
            number: user.questNum
          });
        case 6:
          survey = _context2.sent;
          return _context2.abrupt("return", res.render("survey", {
            survey: survey
          }));
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getSurvey(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var postSurvey = exports.postSurvey = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var choice, id, griffindor, slyderin, huffulepuff, ravenclaw, surveyCurrent, user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          choice = req.body.choice;
          id = req.params.id;
          _context3.next = 4;
          return _User["default"].countDocuments({
            result: 1
          });
        case 4:
          griffindor = _context3.sent;
          _context3.next = 7;
          return _User["default"].countDocuments({
            result: 2
          });
        case 7:
          slyderin = _context3.sent;
          _context3.next = 10;
          return _User["default"].countDocuments({
            result: 3
          });
        case 10:
          huffulepuff = _context3.sent;
          _context3.next = 13;
          return _User["default"].countDocuments({
            result: 4
          });
        case 13:
          ravenclaw = _context3.sent;
          surveyCurrent = [griffindor, slyderin, huffulepuff, ravenclaw];
          _context3.next = 17;
          return _User["default"].findById(id);
        case 17:
          user = _context3.sent;
          if (!(choice == 0 || choice == null)) {
            _context3.next = 30;
            break;
          }
          if (!(user.questNum == 1)) {
            _context3.next = 23;
            break;
          }
          _context3.next = 22;
          return _User["default"].findByIdAndDelete(id);
        case 22:
          return _context3.abrupt("return", res.redirect("/login"));
        case 23:
          user.answerArray.pop();
          user.questNum -= 1;
          _context3.next = 27;
          return user.save();
        case 27:
          return _context3.abrupt("return", res.redirect("/".concat(id, "/survey")));
        case 30:
          if (!(user.questNum == 15)) {
            _context3.next = 36;
            break;
          }
          user.answerArray.push(choice);
          if (user.result) {} else {
            user.result = getMode(user.answerArray, surveyCurrent);
          }
          _context3.next = 35;
          return user.save();
        case 35:
          return _context3.abrupt("return", res.redirect("/".concat(id, "/result")));
        case 36:
          user.answerArray.push(choice);
          user.questNum += 1;
          _context3.next = 40;
          return user.save();
        case 40:
          console.log(user);
          return _context3.abrupt("return", res.redirect("/".concat(id, "/survey")));
        case 42:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function postSurvey(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var result = exports.result = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, user, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return _User["default"].findById(id);
        case 3:
          user = _context4.sent;
          result = user.result;
          _context4.next = 7;
          return user.save();
        case 7:
          return _context4.abrupt("return", res.render('result', {
            result: result
          }));
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function result(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();