'use strict';

//let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
let drawRows: number = 0;
let drawShapes: string = '';
// let drawSpaces: string = '';
let substractSpaces: number = 0;

for (drawRows; drawRows <= lineCount; drawRows++) {
    for (drawSpaces; drawSpaces.length <= (lineCount - drawRows); drawSpaces += '!') {
        if (drawSpaces.length == (lineCount - drawRows)) {
            for (drawSpaces; substractSpaces <= lineCount; substractSpaces++) {
                console.log(drawSpaces.substr(substractSpaces, drawSpaces.length));
                for (drawShapes; drawShapes.length <= 4; drawShapes += '*') {
                    console.log(drawShapes);
                }
            }
        }

    }
}