'use strict';

export abstract class Plant {

  protected abstract color: string;
  protected abstract waterLevel: number;
  protected abstract absorbAmount: number;
  protected abstract needWater: boolean;

  abstract getColor(): string;

  abstract getWaterLevel(): number;

  abstract setWaterLevel(waterAmount: number);

  abstract getNeedWater(): boolean;

  abstract setNeedWater(condition: boolean);

  abstract getAbsorbAmount(): number;
}