'use strict';

class Tree {
  private color: string;
  private waterLevel: number;
  private needWater: boolean;
  constructor(color = 'purple', waterLevel = 0) {
    this.color = color;
    if (waterLevel >= 0 || waterLevel <= 100) {
      this.waterLevel = waterLevel;
    }
    if (this.waterLevel < 10) {
      this.needWater = 1 < 2;
    }
    else {
      this.needWater = 1 > 2;
    }
  }

  isHungry(): boolean {
    if (this.waterLevel < 10) {
      return this.needWater = 1 < 2;
    }
    else {
      return this.needWater = 1 > 2;
    }
  }


  water(waterAmount: number) {
    this.waterLevel += waterAmount / 40;
  }
}

export { Tree };