'use strict';
export { };

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number[] = new Array(1, 2, 3, 8, 5, 6);
numList.map(function (elementValue) {
    if (elementValue === 3) {
        numList.splice(elementValue, 1, 4);
    }
});
console.log(numList);