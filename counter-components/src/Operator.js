import React from 'react';
import IncrementButton from "./IncrementButton";

class Operator extends React.Component {
  render() {
    return (
      <div>
        <IncrementButton augend={1} add={this.props.add} />
        <IncrementButton augend={-1} add={this.props.add} />
        <IncrementButton augend={100} add={this.props.add} />
        <IncrementButton augend={-100} add={this.props.add} />
      </div>
    );
  }
}
export default Operator;