import { Animal } from "./animal";
import { Flyable } from "../Flyable/flyable";

'use strict';

class Birds extends Animal implements Flyable {
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
  land(): void {
    console.log("On the ground.")
  }
  fly(): void {
    console.log("Fly you fools!")
  }
  takeOff(): void {
    console.log("Almost in the air.")
  }  
}

export { Birds };
