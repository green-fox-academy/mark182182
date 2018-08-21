'use strict';

class Tree {
  public color: string;
  public waterLevel: number;
  public needWater: boolean;
  public waterAbsorb: number;
  constructor(color = 'purple', waterLevel = 0) {
    this.color = color;
    if (this.waterLevel >= 0 || this.waterLevel <= 100) {
      this.waterLevel = waterLevel;
    }
    if (waterLevel < 10) {
      this.needWater = true;
    }
    else if (waterLevel >= 10) {
      this.needWater = false;
    }
    this.waterAbsorb = 0.4;
  }
}

export { Tree };