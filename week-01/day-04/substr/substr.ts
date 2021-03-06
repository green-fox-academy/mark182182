'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one
function substr(str: string, keyword: string): number {
    let currentPosition: number = 0;
    for (currentPosition; currentPosition <= keyword.length; currentPosition++) {
        if (keyword.substr(currentPosition, currentPosition) == str.substr(currentPosition, currentPosition)) {
        }
    }
    return (str.search(keyword));
}

//  Example
substr("this is what I'm searching in", "searching");
// should print: `17`
substr("this is what I'm searching in", "not");
// should print: `-1`