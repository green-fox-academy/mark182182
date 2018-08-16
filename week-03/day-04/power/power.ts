'use strict';
export { };

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).


function powerN(base: number, onThePowerOf: number): number {
  if (onThePowerOf > 1) {
    return base * powerN(base, onThePowerOf - 1);
  }
  else {
    return base;
  }
}

console.log(powerN(3, 2));