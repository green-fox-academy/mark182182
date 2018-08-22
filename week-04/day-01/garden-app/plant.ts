'use strict';

class Plant {
  protected color: string;
  protected waterLevel: number;
  protected needWater: boolean;
  protected waterAbsorb: number;
  constructor(color: string, waterLevel: number = 0, needWater: boolean, waterAbsorb: number) {
    this.color = color;
    this.waterLevel = waterLevel;
    this.needWater = needWater;
    this.waterAbsorb = waterAbsorb;
  }
  getColor(): string {
    return this.color;
  }
  getWaterLevel(): number {
    return this.waterLevel;
  }
  setWaterLevel(waterLevel: number): void {
    this.waterLevel = waterLevel;
  }
  getNeedWater(): boolean {
    return this.needWater;
  }
  setNeedWater(needWater: boolean): void {
    this.needWater = needWater;
  }
  getWaterAbsorb(): number {
    return this.waterAbsorb;
  }
}
export { Plant };