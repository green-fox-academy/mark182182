declare function require(path: any): any;

'use strict';
export { };

const fs = require('fs');

const charEncoding = 'utf-8';

function readFromFile() {
  try {
    return fs.readFileSync('hello.txt', charEncoding)

  } catch (e) {
    console.log(e.message);
    return null;
  }
}

console.log(readFromFile());