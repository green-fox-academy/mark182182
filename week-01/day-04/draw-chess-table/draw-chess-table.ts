export { }

'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineCount: number = 8;

for (let a = 1; a <= lineCount; a++) {
    let row: string = '';
    for (let b = 1; b <= (lineCount / 2); b++) {
        row += ' %';
        for (let c = 1; c <= b + 1; c++) {
            row += '_';
        }
    }
    console.log(row);
}