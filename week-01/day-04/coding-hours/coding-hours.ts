'use strict'
/*6 hours
17 weeks
print hours in semester
print percentage of coding hours if weekly 52*/
let hours: number = 6;
let weeks: number = 17;
let workdays: number = 5;
let weeklyWorkhours: number = 52;

let hoursSpentWithCoding: number = hours * workdays * weeks;

let percentageOfCoding: number = hoursSpentWithCoding / (weeks * weeklyWorkhours);

console.log("The number of hours spent with coding: " + hoursSpentWithCoding);
console.log("The percentage of coding hours: " + (percentageOfCoding * 100));