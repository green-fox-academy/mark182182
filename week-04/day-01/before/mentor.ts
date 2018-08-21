'use strict';

class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate') {
    if (gender === 'female' || gender === 'male') {
      this.gender = gender;
    }
    else {
      throw new Error;
    }
    this.name = name;
    this.age = age;
    this.level = level;
  }
  introduce() {
    console.log("Hi, I'm", this.name + ', a', this.age, 'year old', this.gender, this.level, 'mentor');
  }
  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }
}
export { Mentor };