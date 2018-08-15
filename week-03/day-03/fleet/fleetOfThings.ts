'use strict';

import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

const putXIntoList: string = 'X';

let getMilk = new Thing('Get milk');
let removeObs = new Thing('Remove the obstacles');
let standUp = new Thing('Stand up');
let eatLunch = new Thing('Eat lunch');


fleet.add(getMilk);
fleet.add(removeObs);
fleet.add(standUp);
standUp.complete();
fleet.add(eatLunch);
eatLunch.complete();

fleet.print();