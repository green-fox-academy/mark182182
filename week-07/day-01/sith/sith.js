'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;

app.use(bodyParser.json());

app.post('/sith', (req, res) => {
  let originalText = req.body.text.split('. ');
  if (originalText !== undefined) {
    res.json({
      sith_text: swapWords(originalText),
    });
  }
  else {
    res.json({
      "error": "Feed me some text you have to, padawan young you are. Hmmm."
    });
  }
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});

function swapWords(originalText) {
  let textSentences = [];
  let temporary = '';

  originalText.forEach(element => {
    textSentences.push(element.split(' '));
  });

  for (let firstIndex = 0; firstIndex < textSentences.length; firstIndex++) {
    for (let secondIndex = 0; secondIndex < textSentences[firstIndex].length; secondIndex++) {
      if (secondIndex % 2 == 1) {
        temporary = textSentences[firstIndex][secondIndex];
        textSentences[firstIndex][secondIndex] = textSentences[firstIndex][secondIndex - 1];
        textSentences[firstIndex][secondIndex - 1] = temporary;
      }
    }
  }

  let newSentences = textSentences.map((value, index, array) => {
    if (value[index + 1].endsWith('.') === false) {
      value = value.join(' ').toLowerCase() + '. ' + 'Arrg!';
      return value = capitalFirstLetter(value);
    }
    else {
      value = value.join(' ').toLowerCase() + ' HIC!';
      return value = capitalFirstLetter(value);
    }
  });

  return newSentences.join(' ');
}

function capitalFirstLetter(word) {
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}