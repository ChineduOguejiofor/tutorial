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
// const getoptions = () => {
//  let newTag = ol
//  app.options.forEach(element => {
//   <p>element</p>;
// }};

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
    'Options: ',
    app.options.length > 0 ? 'Here are your options' : 'No Options'
  )
);
var user = {
  userName: 'Chinedu 0',
  age: 61,
  mylocation: 'Boston M'
};

// const mylocation = 'Changed M';
var getLocation = function getLocation(Rlocation) {
  if (Rlocation) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      Rlocation
    );
  }
};
var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.userName
  ),
  user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.mylocation)
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);