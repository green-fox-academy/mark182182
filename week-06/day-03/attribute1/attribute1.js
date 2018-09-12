'use strict';

let getImage = document.querySelector('img').src;

console.log(getImage);

document.querySelector('img').src = 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/22045911_1856510064389837_7569176301050683289_n.jpg?_nc_cat=0&oh=af2d0820b3b1957a0c78667654baebdb&oe=5C216C11';

document.querySelector('a').href = 'https://www.greenfoxacademy.com';

let removeButton = document.querySelector('.this-one');
removeButton.setAttribute('disabled', 'disabled');
removeButton.innerHTML = `Don't click me!`;