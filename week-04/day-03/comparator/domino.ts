'use strict';
import { Comparable, printAllFields } from "./comparator";

class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }
  compareTo(other: Domino): number {
    if (this.values[0] < other.values[0] || (this.values[0] === other.values[0] && this.values[1] < other.values[1])) {
      return -1
    } else if (this.values[0] === other.values[0 && this.values[1] === other.values[1]]) {
      return 0;
    } else {
      return 1;
    }
  }

  printAllFields(){
    console.log(this.values);
  }
}
export { Domino, printAllFields };
