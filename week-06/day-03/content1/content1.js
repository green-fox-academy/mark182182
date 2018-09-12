'use strict';

let selectPar = document.querySelectorAll('p');

for (let index = 0; index < selectPar.length - 1; index++) {
  selectPar[index].innerHTML = selectPar[3].innerHTML;
}