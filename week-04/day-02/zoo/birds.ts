import { Animal } from "./animal";

'use strict';

class Birds extends Animal {
  private canFly: boolean;
  private hasSharpBeak: boolean;

  constructor(name: string = 'Parrot', color: string = 'black', age: number = 48, isHungry: boolean = false, isHappy: boolean = true, canFly: boolean = true, hasSharpBeak: boolean = true) {
    super(name, color, age, isHungry, isHappy);
    this.canFly = canFly;
    this.hasSharpBeak = hasSharpBeak;
  }

  getName(): string {
    return this.name;
  }
  breed(): string {
    return 'laying eggs.'

  }
}

export { Birds };