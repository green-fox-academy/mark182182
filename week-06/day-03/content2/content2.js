'use strict';

let getListItems = document.querySelectorAll('li');
let replaceArray = ['apple', 'banana', 'cat', 'dog']

for (let index = 0; index < getListItems.length; index++) {
  getListItems[index].textContent = replaceArray[index];
  getListItems[index].style = 'background-color: limegreen';
}