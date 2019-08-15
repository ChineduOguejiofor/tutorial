const app = {
  title: 'My APP',
  subtitle: 'This is a lovely App',
  options: ['one', 'two']
};
const getSubtitle = subtitle => {
  if (subtitle) {
    return <p>{subtitle}</p>;
  }
};
// const getoptions = () => {
//  let newTag = ol
//  app.options.forEach(element => {
//   <p>element</p>;
// }};

const template = (
  <div>
    <h1>{app.title}</h1>
    {getSubtitle(app.subtitle)}
    <p>
      Options: {app.options.length > 0 ? 'Here are your options' : 'No Options'}
    </p>
  </div>
);
const user = {
  userName: 'Chinedu 0',
  age: 61,
  mylocation: 'Boston M'
};

// const mylocation = 'Changed M';
const getLocation = Rlocation => {
  if (Rlocation) {
    return <p>Location: {Rlocation}</p>;
  }
};
const template2 = (
  <div>
    <h1>{user.userName}</h1>
    {user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.mylocation)}
  </div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
