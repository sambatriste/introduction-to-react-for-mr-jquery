import React from 'react';
import { connect } from "react-redux";
import { addValue } from "../actions";

const IncrementButton = (props) => {
  const augend = props.augend;
  return (
    <button onClick={ev => props.add(augend)}>
      {augend}
    </button>
  );
}


const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    add(augend) {
      const action = addValue(augend);
      dispatch(action);
    }
  }
}

const container = connect(mapStateToProps, mapDispatchToProps)(IncrementButton);
export default container;