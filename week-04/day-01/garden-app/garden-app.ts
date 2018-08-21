'use strict';

import { Garden } from './garden';
import { Flower } from './flower';
import { Tree } from './tree';

let myGarden: Garden = new Garden();
let yellowFlower: Flower = new Flower('yellow', 0);
let blueFlower: Flower = new Flower('blue', 0);
let purpleTree: Tree = new Tree('purple', 0);
let orangeTree: Tree = new Tree('orange', 0);


myGarden.addFlower(yellowFlower);
myGarden.addFlower(blueFlower)
myGarden.addTree(purpleTree);
myGarden.addTree(orangeTree);
myGarden.waterPlants(40);