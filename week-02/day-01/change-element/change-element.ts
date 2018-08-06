'use strict';
export { };

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = new Array(1, 2, 3, 8, 5, 6);
let newNumList = numList.map((numberValue, numberPosition, numList) => {
    console.log(numList, newNumList);
});
console.log(numList, newNumList);
// function replaceNumber(newNumber) {
//     let numberPosition = (numList.indexOf(8, 0));
//     console.log(numList);
//     newNumber = numList.splice(numberPosition, 0, 4);
//     console.log(numList);
//     return newNumber;
// }

