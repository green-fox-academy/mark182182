import { Reptiles } from "./reptiles";
import { Mammals } from "./mammals";
import { Birds } from "./birds";

'use strict';

let reptile = new Reptiles("Crocodile");
let mammal = new Mammals("Koala");
let bird = new Birds("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());