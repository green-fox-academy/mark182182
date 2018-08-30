'use strict';

import { Plant } from './plant';
import { Flower } from './flower';
import { Tree } from './tree';

export class Garden {
  public gardenArea: Plant[];

  constructor() {
    this.gardenArea = [];
  }

  plantWithPlants(plantName: Plant) {
    this.gardenArea.push(plantName);
  }

  waterPlants(waterAmount: number) {
    if (waterAmount > 0) {
      console.log(`Watering with ${waterAmount}`);
    }
    for (let waterEverything = 0; waterEverything < this.gardenArea.length; waterEverything++) {
      if (this.gardenArea[waterEverything] instanceof Flower && this.gardenArea[waterEverything].getWaterLevel() <= 5) {
        this.gardenArea[waterEverything].setWaterLevel(this.gardenArea[waterEverything].getAbsorbAmount() * Math.floor(waterAmount / (this.gardenArea.length)));
        if (this.gardenArea[waterEverything].getWaterLevel() < 5) {
          console.log(`The ${this.gardenArea[waterEverything].getColor()} Flower needs water.`);
        }
      }
      if (this.gardenArea[waterEverything].getWaterLevel() > 5) {
        console.log(`The ${this.gardenArea[waterEverything].getColor()} Flower doesnt need water`);
      }
    }
    for (let waterEverything = 0; waterEverything < this.gardenArea.length; waterEverything++) {
      if (this.gardenArea[waterEverything] instanceof Tree && this.gardenArea[waterEverything].getWaterLevel() <= 10) {
        this.gardenArea[waterEverything].setWaterLevel(this.gardenArea[waterEverything].getAbsorbAmount() * Math.floor(waterAmount / (this.gardenArea.length)));
        if (this.gardenArea[waterEverything].getWaterLevel() < 10) {
          console.log(`The ${this.gardenArea[waterEverything].getColor()} Tree needs water.`);
        }
      }
      if (this.gardenArea[waterEverything].getWaterLevel() > 10) {
        console.log(`The ${this.gardenArea[waterEverything].getColor()} Tree doesnt need water`);
      }
    }
  }
}