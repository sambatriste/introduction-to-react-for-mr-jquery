import React from 'react';
import { connect } from 'react-redux';

const Indicator = (props) => (
  <div>{props.counter}</div>
);

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = null;

const container = connect(mapStateToProps, mapDispatchToProps)(Indicator);
export default container;