import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Option';
import Action from './Action';

export default class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.randPick = this.randPick.bind(this);
    this.createOption = this.createOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  componentDidMount() {
    console.log('I fired');

    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      console.log('Failed on Error ' + error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('I fired did updated');

    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  deleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  deleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
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
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          makeDecision={this.randPick}
        />
        <Options
          options={this.state.options}
          deleteOptions={this.deleteOptions}
          handledeleteOption={this.deleteOption}
        />
        <AddOption handleOption={this.createOption} />
      </div>
    );
  }
}
Indecision.defaultProps = {
  options: []
};
