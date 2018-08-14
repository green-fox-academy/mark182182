'use strict'

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

import fs = require('file-system');
import readLine = require('readline');

if (fs.existsSync('./my-file.txt')) {
  const readParameters = readLine.createInterface({
    input: fs.createReadStream('./my-file.txt'),
  });
  readParameters.on('line', (line) => {
    console.log(`${line}`);
  })
}
else if (!fs.existsSync('./my-file.txt')) {
  console.log('Unable to read file: my-file.txt');
}
