'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
for (let drawNumber: string = ''; drawNumber.length <= lineCount ; drawNumber += '*') {
    console.log(drawNumber);
}