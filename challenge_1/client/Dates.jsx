import React from 'react';

const Dates = (props) => {
  return (
    <div>
      <label htmlFor="start">Enter start date:</label>
      <input id="start" type="date" onChange={props.handleChange}/>
      <label htmlFor="end">Enter end date:</label>
      <input id="end" type="date" onChange={props.handleChange}/>
    </div>
  );
}

module.exports = Dates;