import React from 'react';

const Win = (props) => {
  console.log(props.hasWon);
  return props.hasWon ? <h1>You Win!</h1> : null;
}

export default Win;