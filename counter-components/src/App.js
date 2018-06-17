import React from 'react';
import Operator from './Operator';
import Indicator from './Indicator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.initialValue || 0
    }
    this.add = this.add.bind(this);
  }
  
  add(augend) {
    this.setState({
      counter: this.state.counter + augend
    });
  }

  render() {
    return (
      <div>
        <Indicator counter={this.state.counter} />
        <Operator add={this.add} />
      </div>
    );
  }
}
export default App;
