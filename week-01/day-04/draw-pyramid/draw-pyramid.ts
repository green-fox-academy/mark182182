export { }

'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i = 1; i <= lineCount; i++) {
    let row = '';

    for (let j = 1; j <= (lineCount - i); j++) {
        row += ' ';

    }

    for (let k = 1; k <= i; k++) {
        if (k === 1) {
            row += '*'
        }
        else {
            row += '**';
        }
    }
    console.log(row);
}