'use strict';

var app = {
  title: 'My APP',
  subtitle: 'This is a lovely App',
  options: ['one', 'two']
};
var getSubtitle = function getSubtitle(subtitle) {
  if (subtitle) {
    return React.createElement(
      'p',
      null,
      subtitle
    );
  }
};
var addOption = function addOption(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    appRender();
  }
};
var makeDecision = function makeDecision() {
  var randNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randNum];
  alert(option);
};
var removeAll = function removeAll() {
  app.options = [];
  appRender();
  console.log('i am called');
};
var appRoot = document.getElementById('app');

var appRender = function appRender() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    getSubtitle(app.subtitle),
    React.createElement(
      'p',
      null,
      'Options:',
      ' ',
      app.options.length > 0 ? 'Here are your options' : 'No Options'
    ),
    React.createElement(
      'p',
      null,
      'Options Length ',
      app.options.length
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: makeDecision },
      'Make decision'
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      ' Reset'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (item, index) {
        return React.createElement(
          'li',
          { key: index },
          item
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: addOption },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};