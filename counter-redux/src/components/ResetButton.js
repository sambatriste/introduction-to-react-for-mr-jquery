import React from 'react';
import { connect } from "react-redux";
import { reset } from "../actions";


const ResetButton = (props) => {
  return (
    <button onClick={props.onClick}>Reset</button>
  );
}


const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    onClick() {
      const action = reset();
      dispatch(action);
    }
  }
}

const container = connect(mapStateToProps, mapDispatchToProps)(ResetButton);
export default container;