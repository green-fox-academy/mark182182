import { Animal } from "./animal";

'use strict';

class Reptiles extends Animal {
  private hasVenom: boolean;
  private hasTeeth: boolean;

  constructor(name: string = 'Crocodile', color: string = 'greenish', age: number = 208, isHungry: boolean = false, isHappy: boolean = false, hasVenom: boolean = false, hasTeeth: boolean = true) {
    super(name, color, age, isHungry, isHappy);
    this.hasVenom = hasVenom;
    this.hasTeeth = hasTeeth;
  }

  getName(): string {
    return this.name;
  }
  breed(): string {
    return 'laying eggs.'

  }
}

export { Reptiles };