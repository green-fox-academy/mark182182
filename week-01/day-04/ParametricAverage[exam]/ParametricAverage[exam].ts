'use strict';
export { };

import readline = require('readline');
import process = require('process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', name => {
    console.log('Hi ' + name + '!');
    rl.question('press enter to exit', () => rl.close());
});