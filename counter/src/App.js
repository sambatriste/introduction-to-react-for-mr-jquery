import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.initialValue || 0
    }
  }
  
  add(num) {
    this.setState({
      counter: this.state.counter + num
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={ev => this.add(+1)}>+1</button>
        <button onClick={ev => this.add(-1)}>-1</button>
      </div>
    );
  }
}

export default App;
