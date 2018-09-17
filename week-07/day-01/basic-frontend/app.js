'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 8080;

app.use(bodyParser.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  if (input) {
    res.json({
      "received": input,
      "result": input * 2
    });
  }
  else {
    res.json({
      'error': 'Please provide an input!',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Lasciate ogne speranza, voi ch'intrate ${PORT}`);
});