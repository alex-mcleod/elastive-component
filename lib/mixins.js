'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elastiveMixinFactory = elastiveMixinFactory;
exports.applyElastiveMixin = applyElastiveMixin;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _componentEditor = require('./component-editor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseElastiveMixin = {

  elastiveMeta: {
    editor: _componentEditor.StandardComponentEditor,
    preview: null
  }

};

function elastiveMixinFactory(meta) {
  return _lodash2.default.merge({}, BaseElastiveMixin, {
    elastiveMeta: _lodash2.default.merge({}, BaseElastiveMixin.elastiveMeta, meta)
  });
}

function applyElastiveMixin(meta) {
  var mixin = elastiveMixinFactory(meta);
  return _reactMixin2.default.decorate(mixin);
}