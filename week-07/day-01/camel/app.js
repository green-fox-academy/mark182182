'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;

app.use(bodyParser.json());

app.post('/translate', (req, res) => {
  res.send('Working.');
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});