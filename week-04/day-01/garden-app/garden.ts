'use strict';

import { Flower } from './flower';
import { Tree } from './tree';

class Garden {
  private name: string;
  private flower: Flower;
  private flowers: Flower[];
  private tree: Tree;
  private trees: Tree[];

  constructor(name: string = 'Greenest') {
    this.name = name;
    this.flowers = [];
    this.trees = [];
  }
  addFlower(flower: Flower) {
    this.flowers.push(flower);
  }

  addTree(tree: Tree) {
    this.trees.push(tree);
  }

  printGarden() {
    console.log(this.flowers, this.trees);

  }

  waterPlants(water: number) {
    console.log(`Watering with: ${water}`);
    if (this.flowers.length > 0) {
      for (let isThirsty = 0; isThirsty < this.flowers.length; isThirsty++) {
        if (this.flowers[isThirsty].needWater === 1 < 2 && this.flowers[isThirsty].waterLevel < 5) {
          console.log(`The ${this.flowers[isThirsty].color} Flower need water`);
          this.flowers[isThirsty].waterLevel += this.flowers[isThirsty].waterAbsorb * Math.floor((water / (this.flowers.length + this.trees.length)
          ));
        }
        else if (this.flowers[isThirsty].waterLevel >= 5) {
          this.flowers[isThirsty].needWater = 1 > 2;
          console.log(`The ${this.flowers[isThirsty].color} Flower doesnt need water`);
        }
      }
    }
    if (this.trees.length > 0) {
      for (let isThirsty = 0; isThirsty < this.trees.length; isThirsty++) {
        if (this.trees[isThirsty].needWater === 1 < 2 && this.trees[isThirsty].waterLevel < 5) {
          console.log(`The ${this.trees[isThirsty].color} Flower need water`);
          this.trees[isThirsty].waterLevel += this.trees[isThirsty].waterAbsorb * Math.floor((water / (this.trees.length + this.trees.length)
          ));
        }
        else if (this.trees[isThirsty].waterLevel >= 5) {
          this.trees[isThirsty].needWater = 1 > 2;
          console.log(`The ${this.trees[isThirsty].color} Flower doesnt need water`);
        }
      }
    }
  }
}
export { Garden };