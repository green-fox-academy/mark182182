export { }
'use strict';

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

for (let a: number = 0; a <= 10; a++) {
    drawSquare(a);
}
for (let a: number = 9; a <= 9 && a >= 0; a--) {
    drawSquare(a);
}

function drawSquare(drawSize: number) {
    let lineCount: number = 0;
    lineCount = drawSize;
    for (let a: number = 0; a <= lineCount; a++) {
        let row: string = '';
        for (let b: number = 0; b <= lineCount; b++) {
            if (b === 0) {
                row += '%';
            }
            else if (b === lineCount) {
                row += '%';
            }
            else if (a === 0) {
                row += '%';
            }
            else if (a === lineCount) {
                row += '%';
            }
            else {
                row += ' ';
            }
        }
        console.log(row);
    }
    return drawSize;
}