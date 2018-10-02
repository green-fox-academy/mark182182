'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000;

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT} `);
});