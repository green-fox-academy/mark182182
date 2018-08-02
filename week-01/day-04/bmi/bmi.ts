'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;

//Calculate BMI index based on the two variables
//BMI = kg / (height)^2

let BMI: number = massInKg / (Math.pow(heightInM, 2));
console.log("The BMI is: " + BMI);

//BONUS TIME
//Display the health status of a male based on the given variables

switch (BMI) {
    case 1:
        break;
}