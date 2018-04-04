import React from 'react';

const CurrencySelect = (props) => {
  return (<select>
    {props.currencies.map((currency, index) => <option key={index} value={currency.currency}>{currency.country}</option>)}
  </select>);
};

module.exports = CurrencySelect;