'use strict';
export { };

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
  hunger: number;
  thirst: number;

  constructor() {
    this.hunger = 50;
    this.thirst = 50;
  }
  eat() {
    this.hunger = this.hunger - 1;
  }
  drink() {
    this.thirst = this.thirst - 1;
  }
  play() {
    this.hunger = this.hunger + 1;
    this.thirst = this.thirst + 1;
  }
}

let monkey = new Animal();

monkey.eat();
console.log(monkey);

monkey.drink();
console.log(monkey);

monkey.play();
console.log(monkey);