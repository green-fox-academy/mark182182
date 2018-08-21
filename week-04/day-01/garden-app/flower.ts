'use strict';

class Flower {
  public color: string;
  public waterLevel: number = 0;
  public needWater: boolean;
  public waterAbsorb: number;
  constructor(color: string = 'yellow') {
    this.color = color;
    if (this.waterLevel < 5) {
      this.needWater = true;
    }
    else if (this.waterLevel >= 5) {
      this.needWater = false;
    }
    this.waterAbsorb = 0.75;
  }
}

export { Flower };

