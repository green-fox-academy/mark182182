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
      "result": input * 2,
    });
  }
  else {
    res.json({
      'error': 'Please provide an input!',
    });
  }
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  if (name && title)
    res.json({
      "welcome_message": `Oh, hi there ${name}, my dear student!`,
    });
  else if (name === undefined && title) {
    res.json({
      "error": "Please provide a name!",
    })
  }
  else if (title === undefined && name) {
    res.json({
      "error": "Please provide a title!",
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  let appendable = req.params.appendable + 'a';
  res.json({
    "appended": appendable,
  });
});

app.post('/dountil/:action', (req, res) => {
  let action = req.params.action;
  let actionNumber = req.body.until;
  if (action === 'sum') {
    let sumNumber = 0;
    for (let addNumber = 0; addNumber < actionNumber; addNumber++) {
      sumNumber += addNumber + 1;
    }
    res.json({
      "result": sumNumber,
    });
  }

  else if (action === 'factor') {
    let factorNumber = 1;
    for (let currentFactor = 0; currentFactor < actionNumber; currentFactor++) {
      factorNumber *= currentFactor + 1;
    }
    res.json({
      "result": factorNumber,
    });
  }

  else {
    res.json({
      "error": "Please provide a number!",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Lasciate ogne speranza, voi ch'intrate ${PORT}`);
});