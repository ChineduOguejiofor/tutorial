class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.randPick = this.randPick.bind(this);
    this.createOption = this.createOption.bind(this);
    this.state = {
      options: []
    };
  }
  deleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  randPick() {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randNum]);
  }
  createOption(option) {
    if (!option) {
      return 'Please enter a valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          makeDecision={this.randPick}
        />
        <Options
          options={this.state.options}
          deleteOptions={this.deleteOptions}
        />
        <AddOption handleOption={this.createOption} />
      </div>
    );
  }
}

const Header (props) =>{
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    );
  
}
const Action = props => {
  return (
    <div>
      <button onClick={props.makeDecision} disabled={!props.hasOptions}>
        what should I do?
      </button>
    </div>
  );
};

const Options = (props)=> {
    return (
      <div>
        <button onClick={props.deleteOptions}>Remove All</button>
        {props.options.map((option, index) => {
          return <Option key={index} optionText={option} />;
        })}
      </div>
    );
  
}
const Option =(props)=>{
    return <div>Option: {props.optionText}</div>;
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.todo.value.trim();
    const error = this.props.handleOption(option);
    e.target.elements.todo.value = '';

    this.setState(() => {
      return {
        error
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='todo' />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Indecision />, document.getElementById('app'));
