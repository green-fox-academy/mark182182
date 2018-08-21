'use strict';

import { Garden } from './garden';
import { Flower } from './flower';
import { Tree } from './tree';

let myGarden = new Garden();
let yellowFlower = new Flower('yellow', 20);
let purpleTree = new Tree('purple', 24);

myGarden.addFlower(yellowFlower);
myGarden.addTree(purpleTree);
myGarden.printGarden();