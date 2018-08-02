'use strict';
let a: number = 123;
let b: number = 526;

console.log("Before swapping the numbers: " + '\n', a + '\n', b)

//Making another variable to store the first number
let c: number = a;

//Swapping the two numbers using the temporary third variable
a = b;
b = c;

//Printing the swapped numbers into the command line
console.log("After swapping the numbers: " + '\n', a + '\n', b)