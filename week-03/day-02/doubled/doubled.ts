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
      let decryptedList: string[] = [];
      const fileContent: string[] = readAFile(fileName, charEncode).split('\r\n');
      fileContent.forEach(element => {
        element.split('').forEach(element => {
          
        });
      });
      // return decryptedList;
    }
  }
  catch (e) {
    e.message;
  }
}

decryptFile('duplicated-chars.txt')