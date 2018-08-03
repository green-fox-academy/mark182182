export { }
'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let a: number = 0; a <= lineCount; a++) {
    let row: string = '';
    for (let b: number = 0; b <= lineCount; b++) {
        if (b === 0) {
            row += '%';
        }
        else if (b === 6) {
            row += '%';
        }
        else if (a === 0) {
            row += '%';
        }
        else if (a === 6) {
            row += '%';
        }
        else {
            row += ' ';
        }
    }
    console.log(row);
}