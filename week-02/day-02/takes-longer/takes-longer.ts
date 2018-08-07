'use strict';
export { }

// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';

let insertString: string = 'always takes longer than';

function fixQoute(qoute: string, insertString: string): string {

    let splitQoute: string[] = qoute.split('');
    let splitInsertString: string[] = insertString.split('');
    console.log(splitQoute);
    let spliceQoute: string[] = splitQoute.splice(22, 0, insertString)
    console.log(spliceQoute);
    let joinQoute: string = spliceQoute.join('');
    // console.log(joinQoute);
    return joinQoute;
}
console.log(fixQoute(quote, insertString));