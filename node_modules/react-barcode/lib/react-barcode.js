'use strict';

var React = require('react');
var JsBarcode = require('jsbarcode');
var createClass = require('create-react-class');
var PropTypes = require('prop-types');

var getDOMNode;
// Super naive semver detection but it's good enough. We support 0.12, 0.13
// which both have getDOMNode on the ref. 0.14 and 15 make the DOM node the ref.
var version = React.version.split(/[.-]/);
if (version[0] === '0' && version[1] === '13' || version[1] === '12') {
  getDOMNode = function getDOMNode(ref) {
    return ref.getDOMNode();
  };
} else {
  getDOMNode = function getDOMNode(ref) {
    return ref;
  };
}

var Barcode = createClass({
  propTypes: {
    value: PropTypes.string.isRequired,
    renderer: PropTypes.string,
    format: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    displayValue: PropTypes.bool,
    fontOptions: PropTypes.string,
    font: PropTypes.string,
    textAlign: PropTypes.string,
    textPosition: PropTypes.string,
    textMargin: PropTypes.number,
    fontSize: PropTypes.number,
    background: PropTypes.string,
    lineColor: PropTypes.string,
    margin: PropTypes.number,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      format: 'CODE128',
      renderer: 'svg',
      width: 2,
      height: 100,
      displayValue: true,
      fontOptions: '',
      font: 'monospace',
      textAlign: 'center',
      textPosition: 'bottom',
      textMargin: 2,
      fontSize: 20,
      background: '#ffffff',
      lineColor: '#000000',
      margin: 10
    };
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    var _this = this;

    return Object.keys(Barcode.propTypes).some(function (k) {
      return _this.props[k] !== nextProps[k];
    });
  },

  componentDidMount: function componentDidMount() {
    this.update();
  },

  componentDidUpdate: function componentDidUpdate() {
    this.update();
  },

  update: function update() {
    var renderElement = getDOMNode(this.refs.renderElement);
    try {
      new JsBarcode(renderElement, this.props.value, Object.assign({}, this.props));
    } catch (e) {
      // prevent stop the parent process
      window.console.error(e);
    }
  },

  render: function render() {
    if (this.props.renderer === 'svg') {
      return React.createElement('svg', { ref: 'renderElement' });
    } else if (this.props.renderer === 'canvas') {
      return React.createElement('canvas', { ref: 'renderElement' });
    }
  }
});

module.exports = Barcode;