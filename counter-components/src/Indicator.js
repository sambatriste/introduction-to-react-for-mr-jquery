import React from 'react';

class Indicator extends React.Component {
  render() {
    return (
      <div>{this.props.counter}</div>
    );
  }
}
export default Indicator;