'use strict';
/*6 hours
17 weeks
print hours in semester
print percentage of coding hours if weekly 52*/
var hours = 6;
var weeks = 17;
var workdays = 5;
var weeklyWorkhours = 52;
var hoursSpentWithCoding = hours * workdays * weeks;
var percentageOfCoding = hoursSpentWithCoding / (weeks * weeklyWorkhours);
console.log("The number of hours spent with coding: " + hoursSpentWithCoding);
console.log("The percentage of coding hours: " + percentageOfCoding);
