'use strict';
export { };

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(firstNumber: number, secondNumber:number){
    let sumOfNumbers = firstNumber + secondNumber;
    console.log(sumOfNumbers);
    return sumOfNumbers;
}

sum(12,24);