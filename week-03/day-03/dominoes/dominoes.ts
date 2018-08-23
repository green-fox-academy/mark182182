'use strict';

import { Domino } from "./domino";
import { networkInterfaces } from "os";

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
  filteredDominoes.push(sortedDominoes[0]);
  console.log(sortedDominoes);
  sortedDominoes.forEach(sortedElement => {
    filteredDominoes.forEach(filteredElement => {
      if (sortedElement[0] === filteredElement[1]) {
        filteredDominoes.push(sortedElement);
      };
    })
  });

  console.log(filteredDominoes);

}

sortDominoes(dominoes);