'use strict';
import { Plant } from './plant';

class Flower extends Plant {
  constructor(color: string = 'yellow', waterLevel: number = 0, needWater: boolean = true, waterAbsorb: number = 0.75) {
    super(color, waterLevel, needWater, waterAbsorb);
    this.color = color;
    if (this.waterLevel < 5) {
      this.needWater = true;
    }
    else if (this.waterLevel >= 5) {
      this.needWater = false;
    }
  }
}
export { Flower };

