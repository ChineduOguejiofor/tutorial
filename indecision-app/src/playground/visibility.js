class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
    this.state = {
      toggle: false
    };
  }
  showDetails() {
    this.setState(prevState => {
      return { toggle: !prevState.toggle };
    });
  }
  render() {
    return (
      <div>
        <h1>Hello there</h1>
        <button onClick={this.showDetails}>
          {this.state.toggle ? ' Hide detaitls' : ' Show details'}
        </button>
        {this.state.toggle ? <p>Here are the hidden Detatils</p> : ''}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let toggle = false;
// const showDetails = () => {
//   toggle = !toggle;
//   appVisible();
// };

// const appVisible = () => {
//   const template3 = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showDetails}>
//         {' '}
//         {toggle ? 'Hide Details' : 'Show Details'}
//       </button>
//       {toggle ? <p>Hey, I am now visible</p> : ''}
//     </div>
//   );
//   ReactDOM.render(template3, appRoot);
// };

// appVisible();
