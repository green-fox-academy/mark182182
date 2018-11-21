'use strict';

abstract class Vehicle {
  protected abstract speed:number;
  protected abstract color:string;
  protected abstract materialType:string;

  abstract acceleration(speedValue:number):void;

  description():string {
    return `A ${this.color} colored vehicle with a speed of ${this.speed}. Made of ${this.materialType}.`;
  }

  getSpeed():number{
    return this.speed;
  }

  getColor():string{
    return this.color;
  }

  getMaterial():string{
    return this.materialType;
  }

}

export { Vehicle };
