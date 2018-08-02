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
let drawShapes: string = '';
let drawSpaces: string = '    ';

for (drawSpaces; drawSpaces.length <= lineCount; ) {

    console.log(drawSpaces + (drawShapes += '*'));
}
