'use strict';

let pTags = document.querySelectorAll('p');

if (pTags[3].classList.contains('dolphin')) {
  document.querySelector('.apple').innerHTML = 'pear';
}

if (pTags[0].classList.contains('apple')) {
  document.querySelector('.cat, .red-dot').innerHTML = 'dog';
}

pTags[0].classList.add('red');
pTags[1].classList.remove('balloon');
pTags[1].classList.add('pear');