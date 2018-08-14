'use strict';
export { };

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

declare function require(path: string): any;

const fs = require('fs');
const charEncode: string = 'utf-8';

function readAFile(fileName: string, charEncode: string) {
  return fs.readFileSync(fileName, charEncode);
}

function countLines(fileName: string, charEncode: string): number {
  try {
    if (fs.existsSync(fileName)) {
      const fileContent: string[] = readAFile(fileName, charEncode).split('\r\n');
      let countLines: number = 0;
      fileContent.forEach(elem => {
        if (elem) {
          countLines++;
        }
      })
      console.log(countLines);
    }
  }
  catch (e) {
    return 0;
  }

}

countLines('my-file.txt', charEncode);