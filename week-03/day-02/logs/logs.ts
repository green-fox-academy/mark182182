'use strict';
export { };

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

declare function require(path: string): any;

const fs = require('fs');
const charEncode: string = 'utf-8';

function readAFile(fileName: string, charEncode: string) {
  return fs.readFileSync(fileName, charEncode);
}

function uniqueIPs(fileName: string, charEncode: string): string[] {
  try {
    if (fs.existsSync(fileName)) {
      const fileContent: string[] = readAFile(fileName, charEncode).split('\r\n');
      let listOfIPAdresses: string[] = [];
      fileContent.filter(element => {
        listOfIPAdresses.push(element.substring(27, 38));
      });
      let listOfUniqueAdresses = listOfIPAdresses.filter(onlyUnique);
      return listOfUniqueAdresses;
    }
  }
  catch (e) {
    return e.message;
  }
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function ratioOfGetPost(fileName: string, charEncode: string): number {
  try {
    if (fs.existsSync(fileName)) {
      const fileContent: string[] = readAFile(fileName, charEncode).split('\r\n');
      let listOfGETs: string[] = [];
      listOfGETs = fileContent.map(element => {
        if (element.match('GET')) {
          return element;
        }
      }).filter(element => { return element != undefined })

      let listOfPOSTs: string[] = [];
      listOfPOSTs = fileContent.map(element => {
        if (element.match('POST')) {
          return element;
        }
      }).filter(element => { return element != undefined })
      return listOfGETs.length / listOfPOSTs.length;
    }
  }
  catch (e) {
    return e.message;
  }
}

console.log(uniqueIPs('logs.txt', charEncode));
console.log(ratioOfGetPost('logs.txt', charEncode));