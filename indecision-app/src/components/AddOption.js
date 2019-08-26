import React from 'react';

export default class AddOption extends React.Component {
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

    this.setState(() => ({ error }));
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
