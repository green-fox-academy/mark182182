'use strict';
export { };

// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

declare function require(path: any): any;

const fs = require('fs');

function writeToAFile(filePath: string, writeWord: string): void {
  fs.appendFileSync(filePath, writeWord);
}

function writeFile(filePath: string, writeWord: string, writeLines: number): void {
  try {
    if (fs.existsSync('./' + filePath)) {
      for (let writeCount = 0; writeCount < writeLines; writeCount++) {
        writeToAFile(filePath, writeWord + '\n');
      }
      console.log(writeLines + ' lines written.')
    }
    else throw new Error;
  }
  catch (e) {
    return null;
  }
}
writeFile('my-file.txt', 'hello coffee', 5);