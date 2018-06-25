import React from 'react';

class IncrementButton extends React.Component {

  render() {
    const augend = this.props.augend;
    return (
      <button onClick={ev => this.props.add(augend)}>
        {augend}
      </button>
    );
  }
}
export default IncrementButton;