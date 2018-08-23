'use strict';

export class Sum {
  sumOfTheElements(listOfIntegers: number[]) {
    listOfIntegers.forEach((value, index, array) => {
      return value + value;
    });
  };
};