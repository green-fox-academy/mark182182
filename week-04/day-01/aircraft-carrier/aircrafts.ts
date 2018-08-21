'use strict';

class Aircraft {
  protected type: string;
  protected ammo: number;
  protected baseDamage: number;
  protected currentDamage: number = 0;

  constructor(ammo: number = 0, baseDamage: number) {
    this.ammo = ammo;
    this.baseDamage = baseDamage;
    this.type = type;
  }
  fight() {
    for (let useAmmo = 0; useAmmo < this.ammo; useAmmo++) {
      this.currentDamage += this.baseDamage;
    }
    this.ammo = 0;
  }
  refill(removeAmmo: number) {
  }
  getType(): string {
    return this.type;
  }
  getStatus(): string {
    return;
  }
}

let newAircraft: Aircraft = new Aircraft(10, 30)
newAircraft.fight();