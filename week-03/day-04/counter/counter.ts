'use strict';
export { };

// Write a recursive function that takes one parameter: n and counts down from n.

function countToNumber(n: number): number {
  if (n === n) {
    console.log(n);
    return countToNumber(n - 1);
  }
  else {
    return n - 1;
  }
}

console.log(countToNumber(5));