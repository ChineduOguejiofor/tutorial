import React from 'react';
import Option from './Option';

const Options = props => {
  return (
    <div>
      <button onClick={props.deleteOptions}>Remove All</button>
      {props.options.length === 0 && (
        <p>Please add some options to get started!!</p>
      )}
      {props.options.map((option, index) => {
        return (
          <Option
            key={index}
            optionText={option}
            handledeleteOption={props.handledeleteOption}
          />
        );
      })}
    </div>
  );
};

export default Options;
