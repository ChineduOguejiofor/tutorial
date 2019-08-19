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
const addOption = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    appRender();
  }
};
const makeDecision = () => {
  const randNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randNum];
  alert(option);
};
const removeAll = () => {
  app.options = [];
  appRender();
  console.log('i am called');
};
const appRoot = document.getElementById('app');

const appRender = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {getSubtitle(app.subtitle)}
      <p>
        Options:{' '}
        {app.options.length > 0 ? 'Here are your options' : 'No Options'}
      </p>
      <p>Options Length {app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        Make decision
      </button>
      <button onClick={removeAll}> Reset</button>
      <ol>
        {app.options.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
      <form onSubmit={addOption}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};
