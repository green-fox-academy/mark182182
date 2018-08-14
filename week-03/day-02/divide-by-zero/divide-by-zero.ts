'use strict';
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideNumber(inputNumber: number): number {
  let dividedNumber: number = inputNumber / 10;
  if (inputNumber === 0) {
    throw new Error('fail');
  }
  return dividedNumber;
}

console.log(divideNumber(0));