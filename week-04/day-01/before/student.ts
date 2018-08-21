'use strict';
import { Person } from './person';

class Student extends Person {
  private previousOrganization: string;
  private skippedDays: number;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of Life', skippedDays = 0) {
    super(name, age, gender);
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