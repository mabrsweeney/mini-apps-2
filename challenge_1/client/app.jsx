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
      currencies: []
    }
    this.handleChange = this.handleChange.bind(this);
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
      axios.get(`/api/BTC/${start}/${end}`).then(({data}) => {
        this.setState({bpi:data.bpi});
       }).catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div>
        <ChartComp bpi={this.state.bpi}/>
        <Dates handleChange={this.handleChange}/>
        <CurrencySelect currencies={this.state.currencies}/>
    </div>
    );
  }
}
module.exports = App;
