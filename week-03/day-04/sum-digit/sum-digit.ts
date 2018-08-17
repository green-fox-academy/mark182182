'use strict';
export { };

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

// sumDigit(126) = 6+2+1 => 9
// sumDigit(126) = sumDigit(126 % 10) + sumDigit(12 % 10) + sumDigit(12 / 10)
// sumDigit(126 % 10) = 6
// sumDigit(126 / 10) = 12
// sumDigit(12 % 10) = 2
// sumDigit(12 / 10) = 1 
// Need to floor because 'number' types include float numbers too

function sumDigit(n: number): number {
  let rightMost: number = Math.floor((n / 10) / 10);
  let leftMost: number = Math.floor((n / 10) % 10);
  let middleNumber: number = Math.floor(n % 10);

  let addNumbers: number = leftMost + rightMost + middleNumber;
  if (n != addNumbers) {
    return sumDigit(addNumbers);
  }
  else if (n < 0) {
    throw new Error('Number must be higher than 0');
  }
  else {
    return n;
  }
}

console.log(sumDigit(126));