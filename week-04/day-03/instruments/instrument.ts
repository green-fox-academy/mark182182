'use strict';

abstract class Instrument {
  protected abstract name:string;

  abstract play():void;
}

export { Instrument };
