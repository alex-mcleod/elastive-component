'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styleEditor = require('./style-editor');

var _styleEditor2 = _interopRequireDefault(_styleEditor);

var _stringEditor = require('./string-editor');

var _stringEditor2 = _interopRequireDefault(_stringEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  StyleEditor: _styleEditor2.default,
  StringEditor: _stringEditor2.default
};