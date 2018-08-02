'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

// Store minutes and hours in variables as seconds
let secondsInADay = 86400;
let currentMinutesInSeconds = currentMinutes * 60;
let currentHoursInSeconds = currentHours * 3600;

// Print the remaining seconds of the day
let remainingSeconds = secondsInADay - (currentMinutesInSeconds + currentHoursInSeconds + currentSeconds);

console.log("Seconds remaining: " + remainingSeconds + '\n'
    + "Minutes remaining: " + Math.round(remainingSeconds / 60) + '\n'
    + "Hours remaining: " + remainingSeconds / 3600);