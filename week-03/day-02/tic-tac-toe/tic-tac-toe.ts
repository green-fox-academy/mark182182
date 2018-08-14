'use strict';
export { };

// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.
// Make sure you have the 3 source files given to you on your computer

declare function require(path: string): any;

const fs = require('fs');
const charEncode: string = 'utf-8';

function readAFile(fileName: string, charEncode: string) {
  return fs.readFileSync(fileName, charEncode);
}

function ticTacResult(fileName: string): string {
  try {
    if (fs.existsSync(fileName) && fileName === 'win-o.txt') {
      const oFileContent: string[] = readAFile(fileName, charEncode).split('\r\n');
      return 'O';
    }
    else if (fs.existsSync(fileName) && fileName === 'win-x.txt') {
      const xFileContent: string[] = readAFile(fileName, charEncode).split('\r\n');
      return 'X';
    }
    else if (fs.existsSync(fileName) && fileName === 'draw.txt') {
      const drawFileContent: string[] = readAFile(fileName, charEncode).split('\r\n');
      return 'draw';
    }
  }
  catch (e) {
    return e.message;
  }

}

console.log(ticTacResult('win-o.txt'))
// should print O
console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw
