'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecision = function (_React$Component) {
  _inherits(Indecision, _React$Component);

  function Indecision(props) {
    _classCallCheck(this, Indecision);

    var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

    _this.deleteOptions = _this.deleteOptions.bind(_this);
    _this.randPick = _this.randPick.bind(_this);
    _this.createOption = _this.createOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(Indecision, [{
    key: 'deleteOptions',
    value: function deleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'randPick',
    value: function randPick() {
      var randNum = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randNum]);
    }
  }, {
    key: 'createOption',
    value: function createOption(option) {
      if (!option) {
        return 'Please enter a valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
      this.setState(function (prevState) {
        return { options: prevState.options.concat(option) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'Put your life in the hands of a computer';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          makeDecision: this.randPick
        }),
        React.createElement(Options, {
          options: this.state.options,
          deleteOptions: this.deleteOptions
        }),
        React.createElement(AddOption, { handleOption: this.createOption })
      );
    }
  }]);

  return Indecision;
}(React.Component);

Indecision.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Some default'
};
var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.makeDecision, disabled: !props.hasOptions },
      'what should I do?'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.deleteOptions },
      'Remove All'
    ),
    props.options.map(function (option, index) {
      return React.createElement(Option, { key: index, optionText: option });
    })
  );
};
var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    'Option: ',
    props.optionText
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();

      var option = e.target.elements.todo.value.trim();
      var error = this.props.handleOption(option);
      e.target.elements.todo.value = '';

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement('input', { type: 'text', name: 'todo' }),
          React.createElement(
            'button',
            null,
            'Submit'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(Indecision, { options: ['Abiola', 'Samson'] }), document.getElementById('app'));