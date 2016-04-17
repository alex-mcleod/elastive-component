'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicPreview = BasicPreview;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BasicPreview(props) {
  return _react2.default.createElement(
    'div',
    { style: { padding: '10px' }, onClick: props.onClick },
    props.name
  );
}