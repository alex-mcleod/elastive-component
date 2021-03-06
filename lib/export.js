'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exportLibrary = exportLibrary;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentDefaults = {};

function exportLibrary(libInfo) {
  _lodash2.default.each(libInfo.components, function (coData, name) {
    libInfo.components[name] = _lodash2.default.merge({}, componentDefaults, coData);
  });
  window.__latestElastiveLibrary__ = libInfo;
}