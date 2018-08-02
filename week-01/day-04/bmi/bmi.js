'use strict';
var massInKg = 81.2;
var heightInM = 1.78;
//Calculate BMI index based on the two variables
//BMI = kg / (height)^2
var BMI = massInKg / (Math.pow(heightInM, 2));
console.log("The BMI is: " + BMI);
