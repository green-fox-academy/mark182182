'use strict';

import { StringInstrument } from "./stringed-instrument";

class Violin extends StringInstrument {
  protected name: string;
  protected numberOfStrings: number;
  protected soundOfInstrument: string;

  constructor(numberOfStrings:number = 4) {
    super();
    this.name = "Violin";
    this.numberOfStrings = numberOfStrings;
  }

  sound():string{
    return "Screech";
  }

  play():void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  };
}

export { Violin };
