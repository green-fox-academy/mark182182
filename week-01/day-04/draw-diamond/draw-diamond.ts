'use strict';

//let lineCount: number = 7;

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

let drawColums = 7;
//let drawSpaces = (lineCount / 2);
for (let drawRows = 1; drawRows <= lineCount; drawRows++) {
    for (let k = drawSpaces; k >= 1; k--) {
        console.log("!");
    }
    for (let j = 1; j <= drawColums; j++) {
        console.log("*");
    }
    console.log('!');
    if (drawRows < (lineCount / 2) + 1) {
        drawColums += 2;
        drawSpaces -= 1;
    } else {
        drawColums -= 2;
        drawSpaces += 1;

    }
}