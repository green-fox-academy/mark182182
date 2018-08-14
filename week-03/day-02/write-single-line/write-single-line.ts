'use strict'

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

import fs = require('file-system');
import readLine = require('readline');

function writeFile(fileName: string) {
  try {
    if (fs.existsSync('./' + fileName)) {
      fs.writeFile(fileName, 'Mark');
      return 'File written.';
    }
    else throw new Error;
  }
  catch (e) {
    return 'Unable to write file: my-file.txt';
  }
}
console.log(writeFile('my-file.txt'));