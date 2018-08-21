'use strict';

class Tree {
  public color: string;
  public waterLevel: number = 0;
  public needWater: boolean;
  public waterAbsorb: number;
  constructor(color: string = 'purple') {
    this.color = color;
    if (this.waterLevel < 10) {
      this.needWater = true;
    }
    else if (this.waterLevel >= 10) {
      this.needWater = false;
    }
    this.waterAbsorb = 0.4;
  }
}

export { Tree };