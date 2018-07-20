import React from 'react';

class IncrementButton extends React.Component {

  render() {
    const augend = this.props.augend;
    const handleClick = (ev) => this.props.add(augend);
    return (
      <button onClick={handleClick}>
        {augend}
      </button>
    );
  }
}
export default IncrementButton;