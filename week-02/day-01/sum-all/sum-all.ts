'use strict';
export { };

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai = new Array(3, 4, 5, 6, 7);
let elements: number = 0;
let sum: number = 0;
for (elements; elements < ai.length; elements++) {
    sum += ai[elements];
};
console.log('The sum of the elements is:', sum);