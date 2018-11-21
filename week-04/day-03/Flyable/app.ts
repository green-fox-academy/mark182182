'use strict';

import { Flyable } from "./flyable";
import { Helicopter } from "./helicopter";
import { Birds } from "../zoo/birds";

let newbird: Birds = new Birds();
let randomheli: Helicopter = new Helicopter(10, "Green", "Heavy-Steel");
let namelessheli: Helicopter = new Helicopter();

console.log(namelessheli.description());

console.log("A new helicopter.")
console.log(`Speed = ${randomheli.getSpeed()}, Color = ${randomheli.getColor()}, Material = ${randomheli.getMaterial()}`);

randomheli.acceleration(10);

console.log("The helicopter accelerates.")
console.log(`Speed = ${randomheli.getSpeed()}, Color = ${randomheli.getColor()}, Material = ${randomheli.getMaterial()}`);

console.log(randomheli.description());


function flyAndLand(entity: Flyable): void {
  entity.takeOff();
  entity.fly();
  entity.land();
}

flyAndLand(newbird);
flyAndLand(randomheli);
