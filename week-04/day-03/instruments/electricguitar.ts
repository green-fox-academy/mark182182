'use strict';

import { StringInstrument } from "./stringed-instrument";

class ElectricGuitar extends StringInstrument {

  constructor(numberOfStrings:number = 6) {
    super();
    this.numberOfStrings = numberOfStrings;
    this.name = "Electric Guitar";
  }

  sound():string{
    return "Twang";
  }

  play():void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  };
}

export { ElectricGuitar };
