'use strict';

import { Instrument } from "./instrument";

abstract class StringInstrument extends Instrument {
  protected numberOfStrings:number;

  abstract sound():string;
}

export { StringInstrument };
