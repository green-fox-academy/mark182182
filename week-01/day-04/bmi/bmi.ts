'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;

//Calculate BMI index based on the two variables
//BMI = kg / (height)^2

let BMI: number = massInKg / (Math.pow(heightInM, 2));
console.log("The BMI is: " + BMI);

//BONUS TIME
//Display the health status of a male based on the given variables

if (BMI < 18.5) {
    console.log("Underweight");
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Normal weight");
}
else if (BMI > 24.9 && BMI <= 29.9) {
    console.log("Overweight");
}
else if (BMI > 29.9) {
    console.log("Obesity");
}