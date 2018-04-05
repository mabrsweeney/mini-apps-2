import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import ChartComp from './ChartComp';
import Dates from './Dates';
import CurrencySelect from './CurrencySelect';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpi: {},
      currencies: [],
      currency: 'BTC'
    }
    this.handleChange = this.handleChange.bind(this);
    this.currencyChange = this.currencyChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/BTC/2018-01-01/2018-01-10').then(({data}) => {
      this.setState({bpi:data.bpi});
    }).catch(err => console.log(err));

    axios.get('/api/currencies').then(({data}) => {
      this.setState({currencies: data});
    })
  }
  

  handleChange(event) {
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;

    if (start && end) {
      axios.get(`/api/${this.state.currency}/${start}/${end}`).then(({data}) => {
        this.setState({bpi:data.bpi});
       }).catch(err => console.log(err));
    }
  }

  currencyChange(event) {
    console.log(event.target.value)
    this.setState({currency: event.target.value})
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;

    if (start && end) {
      axios.get(`/api/${event.target.value}/${start}/${end}`).then(({data}) => {
        this.setState({bpi:data.bpi});
       }).catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div>
        <ChartComp bpi={this.state.bpi}/>
        <Dates handleChange={this.handleChange}/>
        <CurrencySelect current = {this.state.currency} currencies={this.state.currencies} currencyChange={this.currencyChange}/>
    </div>
    );
  }
}
module.exports = App;
