'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Types = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makePrimitiveType(name, checkName) {
  checkName = checkName || name;
  var typeCheck = _react2.default.PropTypes[name];
  typeCheck.typeName = checkName;
  typeCheck.isRequired.typeName = checkName;
  return typeCheck;
}

var Types = exports.Types = {
  string: makePrimitiveType('string'),
  style: makePrimitiveType('object', 'style')
};