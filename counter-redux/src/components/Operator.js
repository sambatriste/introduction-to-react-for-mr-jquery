import React from 'react';
import IncrementButton from './IncrementButton';
import ResetButton from "./ResetButton";

const Operator = (props) => (
  <div>
    <IncrementButton augend={1} />
    <IncrementButton augend={-1} />
    <IncrementButton augend={100} />
    <IncrementButton augend={-100} />
    <ResetButton />
  </div>
);

export default Operator;