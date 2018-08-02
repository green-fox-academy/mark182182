'use strict';
// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
// Declaring the three variables for the sides
var a = 10;
var b = 10;
var c = 10;
var cuboidSurfaceArea = 2 * (a * b + b * c + c * a);
var cuboidVolume = a * b * c;
console.log("Surface Area: " + cuboidSurfaceArea);
console.log("Volume: " + cuboidVolume);
