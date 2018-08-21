'use strict';

class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of Life', skippedDays = 0) {
    if (gender === 'female' || gender === 'male') {
      this.gender = gender;
    }
    else {
      throw new Error;
    }
    this.name = name;
    this.age = age;
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }
  introduce() {
    console.log("Hi, I'm", this.name + ', a', this.age, 'year old', this.gender, 'from', this.previousOrganization, 'who skipped', this.skippedDays, 'days from the course already.');
  }
  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }
}

export { Student };