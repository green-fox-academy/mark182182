'use strict';
export { };

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(far: string[]): string[] {
    let appendFar = far.map(function (element) {
        return element + 'a';
    });
    return appendFar;
}
console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
export = appendA;