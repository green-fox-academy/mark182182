'use strict';

let listOfItems = ['bread', 'milk', 'orange', 'tomato'];

let createholdEverything = document.createElement('div');
document.body.appendChild(createholdEverything);
let holdEverything = document.querySelector('div');

holdEverything.style.display = 'flex';
holdEverything.style.flexDirection = 'row';
holdEverything.style.justifyContent = 'center';
holdEverything.style.alignItems = 'center';
holdEverything.style.margin = '0 auto';
holdEverything.style.border = '10px solid rgba(0,0,0,0.2)'

let firstListItem = document.createElement('li');
firstListItem.innerHTML = listOfItems[0];

let secondListItem = document.createElement('li');
secondListItem.innerHTML = listOfItems[1];

let thirdListItem = document.createElement('li');
thirdListItem.innerHTML = listOfItems[2];

let fourthListItem = document.createElement('li');
fourthListItem.innerHTML = listOfItems[3];

let createList = document.createElement('ul');
holdEverything.appendChild(createList);
let selectList = document.querySelector('ul');

selectList.appendChild(firstListItem);
selectList.appendChild(secondListItem);
selectList.appendChild(thirdListItem);
selectList.appendChild(fourthListItem);

selectList.style.display = 'flex';
selectList.style.flexDirection = 'column';
selectList.style.listStyle = 'none';
selectList.style.justifyContent = 'center';
selectList.style.alignItems = 'center';
selectList.style.padding = '0px';
selectList.style.width = '100px';
selectList.style.height = '100px';
selectList.style.border = '1px solid black';

let createDivButton = document.createElement('div');
holdEverything.appendChild(createDivButton);
let selectDiv = document.querySelectorAll('div')[1];

selectDiv.style.display = 'flex';
selectDiv.style.flexDirection = 'column';
selectDiv.style.justifyContent = 'center';
selectDiv.style.alignItems = 'center';
selectDiv.style.border = '1px solid black';
selectDiv.style.width = '100px';
selectDiv.style.height = '100px';


const upButton = document.createElement('button');
upButton.innerHTML = 'Up';
const toRight = document.createElement('button');
toRight.innerHTML = '>';
const deleteButton = document.createElement('button');
deleteButton.innerHTML = 'X';
const downButton = document.createElement('button');
downButton.innerHTML = 'Down';

selectDiv.appendChild(upButton);
selectDiv.appendChild(toRight);
selectDiv.appendChild(deleteButton);
selectDiv.appendChild(downButton);

let createRightList = document.createElement('ul');
holdEverything.appendChild(createRightList);
let selectRightList = document.querySelectorAll('ul')[1];

selectRightList.style.display = 'flex';
selectRightList.style.flexDirection = 'column';
selectRightList.style.listStyle = 'none';
selectRightList.style.justifyContent = 'center';
selectRightList.style.alignItems = 'center';
selectRightList.style.padding = '0px'
selectRightList.style.width = '100px';
selectRightList.style.height = '100px';
selectRightList.style.border = '1px solid black';

let toggleItem = false;
let toggleButton = false;

document.querySelectorAll('button')[1].onclick = () => {
  document.querySelectorAll('li')[0].style.backgroundColor = '';
  selectRightList.appendChild(firstListItem);
};

document.querySelectorAll('li')[0].onclick = () => {
  document.querySelectorAll('li')[0].style.backgroundColor = 'yellow';
  toggleItem = true;
};

document.querySelectorAll('li')[0].onmouseleave = () => {
  document.querySelectorAll('li')[0].style.backgroundColor = '';
};

document.querySelectorAll('li')[0].onmouseover = () => {
  document.querySelectorAll('li')[0].style.backgroundColor = 'grey';
};