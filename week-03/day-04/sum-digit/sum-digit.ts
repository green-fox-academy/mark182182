'use strict';
export { };

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).


function sumDigit(n: number): number {
  if (n > 0) {
    return n + sumDigit(n - 1);
  }
  else if (n < 0) {
    throw new Error('Number must be higher than 0');
  }
  else {
    return n;
  }
}

console.log(sumDigit(126));