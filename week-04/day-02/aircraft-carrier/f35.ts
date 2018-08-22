'use strict';

class F35 extends Aircraft {
  type: string = 'F35';
  constructor(ammo: number = 0, baseDamage: number = 50) {
    super(ammo, baseDamage);
  }

}