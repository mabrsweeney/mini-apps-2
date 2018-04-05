const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
const db = require('./db/index');

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api', (req, res) => {
  console.log(req.body);
  delete req.body.f1;
  delete req.body.f2;
  delete req.body.f3;
  db.insert(req.body, (a,b) => {
    console.log(a,b);
  });
});

app.listen(3000, console.log('Listening on port 3000...'));
