'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;

app.use(bodyParser.json());

app.post('/arrays', (req, res) => {
  let whatToDo = req.body.what;
  let numberArray = req.body.numbers;

  if (whatToDo === 'sum' && numberArray !== undefined) {
    let sumNumbers = 0;
    for (let index = 0; index < numberArray.length; index++) {
      sumNumbers += numberArray[index];
    }
    res.json({
      "result": sumNumbers,
    });
  }

  else if (whatToDo === 'multiply' && numberArray !== undefined) {
    let multiplyNumbers = 1;
    for (let index = 0; index < numberArray.length; index++) {
      multiplyNumbers *= numberArray[index];
    }
    res.json({
      "result": multiplyNumbers,
    });
  }
  else if (whatToDo === 'double' && numberArray !== undefined) {
    for (let index = 0; index < numberArray.length; index++) {
      numberArray[index] = numberArray[index] * 2;
    }
    res.json({
      "result": numberArray,
    });
  }

  else if (whatToDo === undefined || numberArray === undefined) {
    res.json({
      "error": "Please provide what to do with the numbers!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});