'use strict';
export { };

// Create a method that decrypts duplicated-chars.txt

declare function require(path: any): any;

const fs = require('fs');
const charEncode: string = 'utf-8';

function readAFile(fileName: string, charEncode: string) {
  return fs.readFileSync(fileName, charEncode);
}



function decryptFile(fileName: string) {
  try {
    if (fs.existsSync(fileName)) {
      let onlyOneLetterList: string[] = [];
      const fileContent: string[] = readAFile(fileName, charEncode).split('');
      fileContent.forEach(element => {
        onlyOneLetterList.push(element)
      });
      let decryptedList: string = onlyOneLetterList.filter(onlyUnique).join('');
      console.log(decryptedList);
      // return decryptedList;
    }
  }
  catch (e) {
    e.message;
  }
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

decryptFile('duplicated-chars.txt')