'use strict';

import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

function sortDominoes(dominoes: Domino[]) {
  let dominoElements: any[] = [];
  let filteredDominoes: any[] = [];
  dominoes.forEach(element => { dominoElements.push(element.values) });
  filteredDominoes.push(dominoElements[0]);
  console.log(dominoElements);

  for (let currentElement = 0; currentElement < dominoElements.length - 1; currentElement++) {
    dominoElements.forEach((value, index, array) => {
      if (filteredDominoes[currentElement][1] === value[0] && filteredDominoes.indexOf(value) === -1) {
        filteredDominoes.push(value);
      }
    });
  }
  console.log(filteredDominoes);
}

sortDominoes(dominoes);