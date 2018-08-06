'use strict';
export { };

import readline = require('readline');
import stream = require('stream');
import process = require('process');

class ReadLineOptions implements readline.ReadLineOptions {
    constructor(public input: stream.ReadableStream, public output: stream.WritableStream) { }
}


/*rl.question('What is your name? ', name => {
    console.log('Hi ' + name + '!');
    rl.question('press enter to exit', () => rl.close());
});*/

let addNumbers = 0;
let firstOpen = true;
let options = new ReadLineOptions(process.stdin, process.stdout);
let userInput = readline.createInterface(options);
/*
while (firstOpen == true) {
    console.log("Please input 5 numbers.");
    for (var x = 0; x < 5; x++) {
        userInput.question('Please type in a number: ', x)
        if (userInput != null) {
            addNumbers += parseInt(userInput);
            console.log(userInput);
        }
        if (userInput != null && isNaN(parseInt(userInput))) {
            console.log("Please input numbers only.");
        }
        firstOpen = false;
        userInput.close();

    }
    console.log("The sum of the numbers is: " + addNumbers + ",")
    console.log("The average is: " + addNumbers / x + ".")
}*/
for (let inputNumbers: number = 0; inputNumbers < 5; inputNumbers++) {
    chooseNumbers();
    console.log("DONT PANIC");
}


function chooseNumbers() {
    userInput.question('Please type in a number: ', x => {
        console.log("Your number is: ", x);
        userInput.close();
    });
}