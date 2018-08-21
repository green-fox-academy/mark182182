'use strict';

import { Flower } from './flower';
import { Tree } from './tree';

class Garden {
  flower: Flower;
  flowers: Flower[];
  tree: Tree;
  trees: Tree[];

  constructor() {
    this.flowers = [];
    this.trees = [];
  }

  addFlower(flower: Flower) {
    this.flowers.push(flower);
  }

  addTree(tree: Tree) {
    this.flowers.push(tree);
  }

  printGarden() {
    console.log(this.flowers, this.trees);

  }

  waterPlants(water: number) {
    this.flower.water(water);
    this.tree.water(water);
  }
}

export { Garden };