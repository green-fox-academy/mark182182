'use strict';
var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;
// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
// Store minutes and hours in variables as seconds
var secondsInADay = 86400;
var currentMinutesInSeconds = currentMinutes * 60;
var currentHoursInSeconds = currentHours * 3600;
// Print the remaining seconds of the day
var remainingSeconds = Math.abs(secondsInADay - (currentMinutesInSeconds + currentHoursInSeconds + currentSeconds));
console.log("Seconds remaining: " + remainingSeconds + '\n'
    + "Minutes remaining: " + Math.round(remainingSeconds / 60) + '\n'
    + "Hours remaining: " + remainingSeconds / 3600);
