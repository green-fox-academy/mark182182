'use strict';

class Flower {
  private color: string;
  private waterLevel: number;
  private needWater: boolean;
  constructor(color = 'yellow', waterLevel = 0) {
    this.color = color;
    if (waterLevel >= 0 || waterLevel <= 100) {
      this.waterLevel = waterLevel;
      this.needWater = false;
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
    if (this.needWater || this.waterLevel + waterAmount < 100) {
      this.waterLevel += waterAmount / 75;
    }
  }
}

export { Flower };

