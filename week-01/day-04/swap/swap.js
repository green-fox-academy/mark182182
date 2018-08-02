'use strict';
var a = 123;
var b = 526;
console.log("Before swapping the numbers: " + '\n', a + '\n', b);
//Making another variable to store the first number
var c = a;
//Swapping the two numbers using the temporary third variable
a = b;
b = c;
//Printing the swapped numbers into the command line
console.log("Before swapping the numbers: " + '\n', a + '\n', b);
