'use strict';
export { };

// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method

let integers = new Array(4, 5, 6, 7);
for (let numberOfElements = 0; numberOfElements < integers.length; numberOfElements++) { 
    console.log(integers[numberOfElements]) }