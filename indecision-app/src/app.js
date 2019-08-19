class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.randPick = this.randPick.bind(this);
    this.state = {
      options: ['one', 'two', 'three']
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
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.makeDecision}
          disabled={!this.props.hasOptions}
        >
          what should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.deleteOptions}>Remove All</button>
        {this.props.options.map((option, index) => {
          return <Option key={index} optionText={option} />;
        })}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div>Option: {this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.todo.value.trim();
    if (option) {
      alert(option);
      e.target.elements.todo.value = '';
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='todo' />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Indecision />, document.getElementById('app'));
