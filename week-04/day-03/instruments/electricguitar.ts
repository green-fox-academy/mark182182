'use strict';

import { StringInstrument } from "./stringed-instrument";

class ElectricGuitar extends StringInstrument {
  protected name: string;
  protected numberOfStrings: number;

  constructor(numberOfStrings:number = 6) {
    super();
    this.name = "Electric Guitar";
    this.numberOfStrings = numberOfStrings;
  }

  sound():string{
    return "Twang";
  }

  play():void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  };
}

export { ElectricGuitar };
