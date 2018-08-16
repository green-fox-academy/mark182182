'use strict';
export { };

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

const bunnyEars: number = 2;

function totalEars(bunnies: number, bunnyEars: number): number {
  if (bunnies === 1) {
    return 2;
  }
  else if (bunnies < 0) {
    throw new Error;
  }
  else {
    return bunnyEars + totalEars(bunnies - 1, bunnyEars);
  }
}

console.log(totalEars(2, bunnyEars));