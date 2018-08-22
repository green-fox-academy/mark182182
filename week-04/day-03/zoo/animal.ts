'use strict';

abstract class Animal {
  protected name: string;
  protected color: string;
  protected age: number;
  protected isHungry: boolean;
  protected isHappy: boolean;

  constructor(name: string, color: string, age: number, isHungry: boolean, isHappy: boolean) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.isHungry = isHungry;
    this.isHappy = isHappy;
  }
  abstract getName();
  abstract breed();
}

export { Animal };