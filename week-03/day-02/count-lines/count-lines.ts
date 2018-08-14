'use strict';
export { };

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
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
      // for (let lineCount = 0; lineCount < fileContent[0].length; lineCount++) { 
      //   console.log(lineCount);
      // }
    }
  }
  catch (e) {
    return 0;
  }

}

countLines('my-file.txt', charEncode);