'use strict';

class F16 extends Aircraft {
  type: string = 'F16';
  constructor(ammo: number = 0, baseDamage: number = 30, ) {
    super(ammo, baseDamage);
  }

}