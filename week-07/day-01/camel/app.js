'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;

app.use(bodyParser.json());

app.post('/translate', (req, res) => {
  let text = req.body.text;
  let language = req.body.lang;

  if (text !== undefined && language === 'hu') {
    let splitText = text.split('');
    let translatedText = splitText.map((value, index, array) => {
      if (value.match('a|á|e|é|o|A|Á|E|É|O') !== null) {
        return value = value + 'v' + value.toLowerCase();
      }
      else
        return value;
    });
    res.json({
      translated: translatedText.join(''),
    });
  }
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});