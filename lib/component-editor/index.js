'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandardComponentEditor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _propEditors = require('./prop-editors');

var _propEditors2 = _interopRequireDefault(_propEditors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getPropEditor(component, propName) {
  var type = component.constructor.propTypes[propName];
  var PropTypes = _react2.default.PropTypes;

  if (type === PropTypes.string || type === PropTypes.string.isRequired) {
    return _propEditors2.default.StringEditor;
  }
  if ((type === PropTypes.object || type === PropTypes.object.isRequired) && propName === 'style') {
    return _propEditors2.default.StyleEditor;
  }
  return null;
}

var StandardComponentEditor = exports.StandardComponentEditor = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_React$Component) {
  _inherits(StandardComponentEditor, _React$Component);

  function StandardComponentEditor() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, StandardComponentEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(StandardComponentEditor)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.updateProp = function (propName, newValue) {
      _this.props.updateProp(_this.props.component, propName, newValue);
    }, _this.deleteComponent = function () {
      _this.props.deleteComponent(_this.props.component);
    }, _this.renderEditableProp = function (editablePropName) {
      var value = _this.props.component.props[editablePropName];
      // TODO
      var Component = getPropEditor(_this.props.component, editablePropName);
      if (!Component) {
        console.warn('No edit component for \'' + editablePropName + '\' prop');
        return null;
      }
      return _react2.default.createElement(Component, {
        key: editablePropName,
        update: function update(newVal) {
          _this.updateProp(editablePropName, newVal);
        },
        name: editablePropName,
        currentValue: value
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StandardComponentEditor, [{
    key: 'render',
    value: function render() {
      var component = this.props.component;

      if (!component) return null;
      var editable = component.constructor.elastiveMeta.editableProps;
      return _react2.default.createElement(
        'div',
        { style: StandardComponentEditor.styles.container },
        editable.map(this.renderEditableProp),
        _react2.default.createElement(
          'p',
          { onClick: this.deleteComponent },
          'Delete'
        )
      );
    }
  }]);

  return StandardComponentEditor;
}(_react2.default.Component), _class2.propTypes = {
  updateProp: _react2.default.PropTypes.func.isRequired,
  deleteComponent: _react2.default.PropTypes.func.isRequired,
  component: _react2.default.PropTypes.object
}, _class2.styles = {
  container: {
    position: 'fixed',
    bottom: '0px',
    right: '0px',
    padding: '20px',
    backgroundColor: 'white',
    border: '1px solid black'
  }
}, _temp2)) || _class;