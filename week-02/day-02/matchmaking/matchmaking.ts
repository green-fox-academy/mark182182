'use strict';
export { };

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(girls: string[], boys: string[]): string[] {
    let matchMaking: string[] = [];
    for (let element = 0; element < boys.length; element++) {
        if (girls[element] != undefined) {
            matchMaking.push(girls[element]);
            matchMaking.push(boys[element]);
        }
        else {
            matchMaking.push(boys[element]);

        }
    }
    return matchMaking;

}

console.log(makingMatches(girls, boys));

export = makingMatches;