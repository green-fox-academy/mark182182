'use strict';
import { Vehicle } from "./vehicle";
import { Flyable } from "./flyable";

class Helicopter extends Vehicle implements Flyable {
  protected speed: number;
  protected color: string;
  protected materialType: string;

  constructor(speed:number = 10, color:string = "black", materialType = "steel") {
    super();
    this.speed = speed;
    this.color = color;
    this.materialType = materialType;
  }

  acceleration(speedValue: number): void {
    this.speed += speedValue * 2;
  }

  land(): void {
    console.log("The helicopter lands.");
  }
  fly(): void {
    console.log("The helicopter is in the air.");
  }
  takeOff(): void {
    console.log("The helicopter takes off.")
  }

}

export { Helicopter };
