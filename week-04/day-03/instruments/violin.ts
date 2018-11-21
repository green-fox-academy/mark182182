'use strict';

import { StringInstrument } from "./stringed-instrument";

class Violin extends StringInstrument {

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
