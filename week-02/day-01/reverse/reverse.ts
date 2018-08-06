'use strict';
export { }

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numList = new Array(3, 4, 5, 6, 7);
numList.reverse();
console.log(numList);

let numListLoop = new Array(3, 4, 5, 6, 7);
let tempList = new Array();
for (let a: number = (numListLoop.length - 1); a >= 0; a--) {
    tempList.push(numListLoop[a]);
}
console.log(tempList);