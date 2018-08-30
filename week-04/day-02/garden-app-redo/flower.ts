'use strict';

import { Plant } from './plant';

export class Flower extends Plant {
  protected color: string;
  protected waterLevel: number;
  protected absorbAmount: number;
  protected needWater: boolean;

  constructor(color: string = 'yellow') {
    super();
    this.color = color;
    this.waterLevel = 0;
    this.absorbAmount = 0.75;
  }

  getColor(): string {
    return this.color;
  }

  getWaterLevel(): number {
    return this.waterLevel;
  }

  setWaterLevel(waterAmount: number) {
    this.waterLevel += waterAmount;
  }

  getNeedWater(): boolean {
    return this.needWater;
  }

  setNeedWater(condition: boolean) {
    this.needWater = condition;
  }

  getAbsorbAmount(): number {
    return this.absorbAmount;
  }
}