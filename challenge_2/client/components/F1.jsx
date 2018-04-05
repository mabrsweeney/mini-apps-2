import React from 'react';

const F1 = (props) => {
  return props.display ? (<form id="f1" onSubmit={() => props.next(2)} >
    First Name:<br/>
    <input type="text" id="first" onChange={props.onStringChange}/><br/>
    Last Name:<br/>
    <input type="text" id="last" onChange={props.onStringChange}/><br/>
    Email Address:<br/>
    <input type="text" id="email" onChange={props.onStringChange}/><br/>
    Password:<br/>
    <input type="text" id="password" onChange={props.onStringChange}/><br/>
    <input type="submit" value="submit" />

  </form>) : null;
}
export default F1;