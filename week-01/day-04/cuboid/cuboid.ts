'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

// Declaring the three variables for the sides
let a: number = 10;
let b: number = 10;
let c: number = 10;

// Making the calculations in two variables
let cuboidSurfaceArea: number = 2 * (a * b + b * c + c * a);
let cuboidVolume: number = a * b * c;

// Printing out the result
console.log("Surface Area: " + cuboidSurfaceArea);
console.log("Volume: " + cuboidVolume);