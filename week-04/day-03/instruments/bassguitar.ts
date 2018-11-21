'use strict';

import { StringInstrument } from "./stringed-instrument";

class BassGuitar extends StringInstrument {
  protected name: string;
  protected numberOfStrings: number;
  protected soundOfInstrument: string;

  constructor(numberOfStrings:number = 4) {
    super();
    this.name = "Bass Guitar";
    this.numberOfStrings = numberOfStrings;
  }

  sound():string{
    return "Duum-duum-duum";
  }

  play():void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  };
}

export { BassGuitar };
