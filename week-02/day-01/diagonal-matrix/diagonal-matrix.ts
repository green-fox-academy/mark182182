'use strict';
export { };

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

const numberOfLines = 4;

let twoDimensonalArray: number[][] = new Array();
for (let a = 0; a < numberOfLines; a++) {
    twoDimensonalArray.push([0, 0, 0, 0]);
}

for (let b = 0; b < numberOfLines; b++) {
    if (b == 0) {
        twoDimensonalArray.splice(b, 0, [0, 0, 0, 1]);
    }
    else if (b == 1) {
        twoDimensonalArray.splice(b, 0, [0, 0, 1, 0]);
    }
    else if (b == 2) {
        twoDimensonalArray.splice(b, 0, [0, 1, 0, 0]);
    }
    else if (b == 3) {
        twoDimensonalArray.splice(b, 0, [1, 0, 0, 0]);
    }
}

console.log(twoDimensonalArray[0]);
console.log(twoDimensonalArray[1]);
console.log(twoDimensonalArray[2]);
console.log(twoDimensonalArray[3]);