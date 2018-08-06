'use strict';
export { };
let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away
console.log('Before the replace:', example);

export = example;

console.log('After the replace:', example.replace('dishwasher', 'galaxy'));