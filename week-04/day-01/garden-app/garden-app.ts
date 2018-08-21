'use strict';

import { Garden } from './garden';
import { Flower } from './flower';
import { Tree } from './tree';

let myGarden: Garden = new Garden();
let yellowFlower: Flower = new Flower('yellow');
let blueFlower: Flower = new Flower('blue');
let purpleTree: Tree = new Tree('purple');
let orangeTree: Tree = new Tree('orange');


myGarden.addFlower(yellowFlower);
myGarden.addFlower(blueFlower)
myGarden.addTree(purpleTree);
myGarden.addTree(orangeTree);
myGarden.waterPlants(0);
myGarden.waterPlants(40);
myGarden.waterPlants(70);