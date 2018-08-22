'use strict';

import { Flower } from './flower';
import { Tree } from './tree';

class Garden {
  private name: string;
  private flowers: Flower[];
  private trees: Tree[];

  constructor(name: string = 'Greenest') {
    this.name = name;
    this.flowers = [];
    this.trees = [];
  }
  addFlower(flower: Flower): void {
    this.flowers.push(flower);
  }

  addTree(tree: Tree): void {
    this.trees.push(tree);
  }

  needWater() {
    if (this.flowers.length > 0) {
      for (let isThirsty = 0; isThirsty < this.flowers.length; isThirsty++) {
        if (this.flowers[isThirsty].getNeedWater() === 1 < 2 && this.flowers[isThirsty].getWaterLevel() < 5) {
          console.log(`The ${this.flowers[isThirsty].getColor()} Flower need water`);
        }
        else if (this.flowers[isThirsty].getWaterLevel() >= 5) {
          this.flowers[isThirsty].setNeedWater(1 > 2);
          console.log(`The ${this.flowers[isThirsty].getColor()} Flower doesnt need water`);
        }
      }
    }
    if (this.trees.length > 0) {
      for (let isThirsty = 0; isThirsty < this.trees.length; isThirsty++) {
        if (this.trees[isThirsty].getNeedWater() === 1 < 2 && this.trees[isThirsty].getWaterLevel() < 5) {
          console.log(`The ${this.trees[isThirsty].getColor()} Tree need water`);
        }
        else if (this.trees[isThirsty].getWaterLevel() >= 5) {
          this.trees[isThirsty].setNeedWater(1 > 2);
          console.log(`The ${this.trees[isThirsty].getColor()} Tree doesnt need water`);
        }
      }
    }
  }
  waterPlants(water: number): void {
    console.log(`Watering with: ${water}`);
    if (this.flowers.length > 0) {
      for (let isThirsty = 0; isThirsty < this.flowers.length; isThirsty++) {
        if (this.flowers[isThirsty].getNeedWater() === 1 < 2 && this.flowers[isThirsty].getWaterLevel() < 5) {
          this.flowers[isThirsty].setWaterLevel(this.flowers[isThirsty].getWaterAbsorb() * Math.floor((water / (this.flowers.length + this.trees.length))
          ));
        }
      }
    }
    if (this.trees.length > 0) {
      for (let isThirsty = 0; isThirsty < this.trees.length; isThirsty++) {
        if (this.trees[isThirsty].getNeedWater() === 1 < 2 && this.trees[isThirsty].getWaterLevel() < 5) {
          this.trees[isThirsty].setWaterLevel(this.trees[isThirsty].getWaterAbsorb() * Math.floor((water / (this.trees.length + this.trees.length))
          ));
        }
      }
    }
  }
}
export { Garden };