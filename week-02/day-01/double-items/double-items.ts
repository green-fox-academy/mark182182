'use strict';
export { };

// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

let drinks = Array<string>('Gin', 'Whiskey', 'Wine', 'Beer');
let drinksNew = drinks.(function (e) { return '#' + e });
console.log(drinksNew);