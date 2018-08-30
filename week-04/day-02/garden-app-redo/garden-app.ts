'use strict';

import { Garden } from './garden';
import { Flower } from './flower';
import { Tree } from './tree';

const newGarden = new Garden();
const yellowFlower = new Flower('yellow');
const blueFlower = new Flower('blue');
const purpleTree = new Tree('purple');
const orangeTree = new Tree('orange');

newGarden.plantWithPlants(yellowFlower);
newGarden.plantWithPlants(blueFlower);
newGarden.plantWithPlants(purpleTree);
newGarden.plantWithPlants(orangeTree);

newGarden.waterPlants(0);
newGarden.waterPlants(40);
newGarden.waterPlants(70);