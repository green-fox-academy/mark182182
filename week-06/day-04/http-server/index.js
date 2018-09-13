'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/assets', express.static('assets'));

app.get('/assets', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
  res.json({
    message: 'pong',
    status: 200,
  });
});

app.listen(PORT);