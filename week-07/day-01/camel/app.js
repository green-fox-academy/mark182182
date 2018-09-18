'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;
const Hypher = require('hypher'),
  english = require('hyphenation.en-us'),
  h = new Hypher(english);

app.use(bodyParser.json());

app.post('/translate', (req, res) => {
  let text = req.body.text;
  let language = req.body.lang;

  if (text !== undefined && text !== '' && language === 'hu' && language !== undefined && language !== '') {
    const lettersToFind = 'a|á|e|é|o';
    let splitText = text.split('');
    let translatedText = splitText.map((value, index, array) => {
      if (value.match(lettersToFind) !== null || value.match(lettersToFind.toUpperCase()) !== null) {
        return value = value + 'v' + value.toLowerCase();
      }
      else
        return value;
    });
    res.json({
      translated: translatedText.join(''),
      lang: 'teve',
    });
  }

  else if (text !== undefined && text !== '' && language === 'eng' && language !== undefined && language !== '') {
    const gibberish = ['idig', 'uddag', 'uvug', 'uthug'];
    let hyphenatedText = h.hyphenate(text);
    let translatedText = hyphenatedText.map((value, index, array) => {
      return value = value + gibberish[~~(Math.random() * gibberish.length)];
    });
    res.json({
      translated: translatedText.join(''),
      lang: 'gibberish',
    });
  }

  else {
    res.json({
      "error": "I can't translate that!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});