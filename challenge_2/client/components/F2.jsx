import React from 'react';

const F2 = (props) => {
  return props.display ? (<form id="f1" onSubmit={() => props.next(3)} >
    Address Line 1: <br/>
    <input type="text" id="address1" onChange={props.onStringChange}/><br/>
    Address Line 2:<br/>
    <input type="text" id="address2" onChange={props.onStringChange}/><br/>
    City:<br/>
    <input type="text" id="city" onChange={props.onStringChange}/><br/>
    State: <br/>     
    <input type="text" id="state" onChange={props.onStringChange}/><br/>
    Zip Code:<br/>
    <input type="text" id="zip" onChange={props.onStringChange}/><br/>
    Phone Number:<br/>
    <input type="text" id="phone" onChange={props.onStringChange}/><br/>
    <input type="submit" value="submit" />

  </form>) : null;
}
export default F2;