import React from 'react';

const F3 = (props) => {
  return props.display ? (<form id="f1" onSubmit={props.onSubmit} >
    Credit Card Number:<br/>
    <input type="text" id="card" onChange={props.onStringChange}/><br/>
    Expiry Date:<br/>
    <input type="text" id="expiry" onChange={props.onStringChange}/><br/>
    CVV:<br/>
    <input type="text" id="cvv" onChange={props.onStringChange}/><br/>
    Billing Zip Code:<br/>
    <input type="text" id="billingzip" onChange={props.onStringChange}/><br/>
    <input type="submit" value="submit" />
  </form>) : null;
}

export default F3;