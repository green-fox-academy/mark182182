'use strict';
import { Comparable } from "./comparator";

class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }
  compareTo(other: Comparable): number {
    if (this.values[0]) {
      return -1;
    };
    ;
  }
}
export { Domino };