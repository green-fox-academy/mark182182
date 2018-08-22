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
  let sortedDominoes: any[] = [];
  let filteredDominoes: number[] = [];
  dominoes.forEach(element => { sortedDominoes.push(element.values) });
  console.log(sortedDominoes);
  sortedDominoes.sort();
  console.log(sortedDominoes);
  for (let filterElements = 0; filterElements < sortedDominoes.length; filterElements++) {
    sortedDominoes.filter(element => {
      for (let currentElement = 0; currentElement < sortedDominoes.length; currentElement++) {
        if (element[0] === sortedDominoes[filterElements][currentElement + 1]) {
          filteredDominoes.push(element);
        }
      }
    });
  }
  console.log(filteredDominoes);

}

sortDominoes(dominoes);