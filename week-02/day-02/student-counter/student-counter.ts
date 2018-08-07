'use strict';

const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function logStudentCandies(students: object[]): number {
    let numberOfCandies = 0;
    for (let currentCandy = 0; currentCandy < students.length; currentCandy++) {
        numberOfCandies += students[currentCandy]['candies'];
    }
    return numberOfCandies;
}

function logLessCandies(students: object[]): number {
    let numberOfCandies = 0;
    for (let currentCandy = 0; currentCandy < students.length; currentCandy++) {
        if (students[currentCandy]['candies'] < 5) {
            numberOfCandies += students[currentCandy]['age'];
        }
    }
    return numberOfCandies;
}

console.log("Candies owned by the students:", logStudentCandies(students));
console.log("Sum of students age who have less than 5 candies: ",logLessCandies(students));