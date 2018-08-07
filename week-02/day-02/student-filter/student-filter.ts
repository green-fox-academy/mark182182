'use strict';
export { };

const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function logStudentCandies(students: object[]): string[] {
    let moreThanFour: string[] = [];
    for (let currentCandies = 0; currentCandies < students.length; currentCandies++)
        if (students[currentCandies]['candies'] > 4) {
            moreThanFour += students[currentCandies]['name'] + [" "];
        }
    return moreThanFour;
}

function logStudentAverageCandies(students: object[]): number {
    let averageCandies: number = 0;
    for (let currentCandies = 0; currentCandies < students.length; currentCandies++) {
        averageCandies += students[currentCandies]['candies'];
    }
    averageCandies /= students.length;
    return averageCandies;
}

console.log(logStudentCandies(students));
console.log(logStudentAverageCandies(students));