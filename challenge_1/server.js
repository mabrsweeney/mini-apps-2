const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public')));

app.get('/api/:currency/:start/:end', (req, res) => {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${req.params.currency}&start=${req.params.start}&end=${req.params.end}`)
  .then(({data}) => {
    res.send(data);
  }).catch(() => {
    res.sendStatus(411);
  });
});

app.get('/api/currencies', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/supported-currencies.json').then(({data}) => {
    res.send(data);
  }).catch(() => {
    res.sendStatus(412);
  })
});

app.listen(3000, console.log('Listening on port 3000...'))
