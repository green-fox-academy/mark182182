'use strict';
export { };

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(number: number[]): string {
    let returnString: string = '';
    for (let element = 0; element < number.length; element++) {
        if (numbers[element] === 7) {
            returnString = 'Hoorray';
        }
        else if (numbers[element] !== 7) {
            returnString = 'Noooooo';
        }
    }
    return returnString;
}

console.log(containsSeven(numbers));

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

export = containsSeven;