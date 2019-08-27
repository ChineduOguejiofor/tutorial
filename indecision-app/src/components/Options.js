// import React from 'react';
// import Option from './Option';

// const Options = props => {
//   return (
//     <div>
//       <button onClick={props.deleteOptions}>Remove All</button>
//       {props.options.length === 0 && (
//         <p>Please add some options to get started!!</p>
//       )}
//       {props.options.map((option, index) => {
//         return (
//           <Option
//             key={index}
//             optionText={option}
//             handledeleteOption={props.handledeleteOption}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default Options;
import React from 'react';
import Option from './Option';

const Options = props => {
  return (
    <div>
      <button onClick={props.handledeleteOption}>Remove All</button>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handledeleteOption={props.handledeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;
