import React from 'react';

const CurrencySelect = (props) => {
  return (<select value={props.currency} onChange={props.currencyChange}>
    {props.currencies.map((currency, index) => {
      return (
        <option 
          key={index} 
          value={currency.currency}
        >{currency.country}</option>);
    })}
  </select>);
};

module.exports = CurrencySelect;