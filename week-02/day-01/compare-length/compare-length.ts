'use strict';
export { };

// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

let firstList = new Array(1, 2, 3);
let secondList = new Array(4, 5);
if (secondList.length > firstList.length) {
     console.log(secondList)}
    //  No output on the console, because firstList > secondList