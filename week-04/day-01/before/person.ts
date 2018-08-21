'use strict';

class Person {
  protected name: string;
  protected age: number;
  protected gender: string;

  constructor(name = 'Jane Doe', age = 30, gender = 'female') {
    if (gender === 'female' || gender === 'male') {
      this.gender = gender;
    }
    else {
      throw new Error;
    }
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log("Hi, I'm", this.name + ', a', this.age, 'year old', this.gender + '.');
  }
  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}

export { Person };