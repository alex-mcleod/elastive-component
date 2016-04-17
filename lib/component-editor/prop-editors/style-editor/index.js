'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _stringEditor = require('../string-editor');

var _stringEditor2 = _interopRequireDefault(_stringEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleEditor = (_temp2 = _class = function (_React$Component) {
  _inherits(StyleEditor, _React$Component);

  function StyleEditor() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, StyleEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(StyleEditor)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.updateAttr = function (attr, newValue) {
      _this.props.update(_lodash2.default.merge({}, _this.props.currentValue, _defineProperty({}, attr, newValue)));
    }, _this.renderEditorForStyleAttr = function (curVal, attr) {
      return _react2.default.createElement(
        'div',
        { key: attr },
        _react2.default.createElement(_stringEditor2.default, {
          name: attr, update: function update(newVal) {
            return _this.updateAttr(attr, newVal);
          }, currentValue: curVal
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StyleEditor, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _lodash2.default.map(this.props.currentValue, this.renderEditorForStyleAttr)
      );
    }
  }]);

  return StyleEditor;
}(_react2.default.Component), _class.propTypes = {
  update: _react2.default.PropTypes.func.isRequired,
  currentValue: _react2.default.PropTypes.object.isRequired
}, _temp2);
exports.default = StyleEditor;