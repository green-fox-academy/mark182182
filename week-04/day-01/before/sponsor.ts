'use strict';

class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google', hiredStudents = 0) {
    if (gender === 'female' || gender === 'male') {
      this.gender = gender;
    }
    else {
      throw new Error;
    }
    this.name = name;
    this.age = age;
    this.company = company;
    this.hiredStudents = hiredStudents;
  }
  introduce() {
    console.log("Hi, I'm", this.name + ', a', this.age, 'year old', this.gender, 'who represents', this.company, 'and hired', this.hiredStudents, 'students so far.');
  }
  hire() {
    this.hiredStudents++;
  }
  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');
  }
}
export { Sponsor };