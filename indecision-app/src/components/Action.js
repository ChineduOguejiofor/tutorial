import React from 'react';

const Action = props => {
  console.log('I am here');

  return (
    <div>
      <button onClick={props.makeDecision} disabled={!props.hasOptions}>
        what should I do?
      </button>
    </div>
  );
};

export default Action;
