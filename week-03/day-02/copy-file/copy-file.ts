'use strict';
export { };

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

declare function require(path: any): any;
const fs = require('fs');

function copyAFile(sourceName: string, destinationName: string) {
  return fs.copyFileSync(sourceName, destinationName);
}

function makeCopy(srcName: string, destName: string): boolean {
  try {
    if (fs.existsSync(srcName)) {
      copyAFile(srcName, destName);
      console.log('Copy was successful.');
      return 1 < 2;
    }
    else {
      throw new Error;
    }
  }
  catch (e) {
    console.log('Copy was unsuccessful.');
  }
}

makeCopy('first-file.txt', 'second-file.txt');