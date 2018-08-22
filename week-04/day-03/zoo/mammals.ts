import { Animal } from "./animal";

'use strict';

class Mammals extends Animal {
  private numberOfLegs: number;
  private hasFur: boolean;

  constructor(name: string = 'Koala', color: string = 'black-white', age: number = 82, isHungry: boolean = false, isHappy: boolean = false, numberOfLegs: number = 4, hasFur = true) {
    super(name, color, age, isHungry, isHappy);
    this.numberOfLegs = numberOfLegs;
    this.hasFur = hasFur;
  }

  getName(): string {
    return this.name;
  }
  breed(): string {
    return 'pushing miniature versions out.'

  }
}

export { Mammals };