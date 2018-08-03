'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for (let i = 1; i <= (lineCount -3); i++) {
    let row = '';

    for (let j = 1; j <= ((lineCount -3) - i); j++) {
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