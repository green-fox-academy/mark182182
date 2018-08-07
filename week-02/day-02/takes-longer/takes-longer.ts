'use strict';
export { }

// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';

let insertString: string = 'always takes longer than';

function fixQoute(qoute: string, insertString: string): string {

    let newQoute: string = qoute.substring(0, 21).concat(insertString).concat(qoute.substring(20, qoute.length));
    return newQoute;
}
console.log(fixQoute(quote, insertString));