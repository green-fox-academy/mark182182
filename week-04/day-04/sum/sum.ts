'use strict';

export class Sum {
  sumOfTheElements(listOfIntegers: number[]): number[] {
    let addValuesTogether: number = 0;
    let sumOfListElements: number[] = [];
    listOfIntegers.forEach((value, index, array) => {
      if (index < 1) {
        return addValuesTogether = value;
      }
      else {
        return addValuesTogether = value + value;
      }
    });
    if (addValuesTogether !== 0) {
      sumOfListElements.push(addValuesTogether);
    }
    return sumOfListElements;
  };
}