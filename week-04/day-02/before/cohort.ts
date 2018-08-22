'use strict';
import { Student } from './student';
import { Mentor } from './mentor';

class Cohort {
  private name: string;
  private students: Student[];
  private mentors: Mentor[];
  constructor(name: string = 'AWESOME') {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }
  addStudent(student: Student) {
    this.students.push(student);
  }
  addMentor(mentor: Mentor) {
    this.mentors.push(mentor);
  }
  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);

  }
}

export { Cohort };