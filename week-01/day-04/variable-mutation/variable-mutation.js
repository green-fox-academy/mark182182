'use strict';
var a = 3;
// make it bigger by 10
console.log(a + 7);
var b = 100;
// make it smaller by 7
console.log(b - 7);
var c = 44;
// double c's value
console.log(c * 2);
var d = 125;
// divide d's value by 5
console.log(d / 5);
var e = 8;
// what's the cube of e's value?
console.log(Math.cbrt(e));
var f1 = 123;
var f2 = 345;
// tell if f1 is bigger than f2 (as a boolean)
console.log(f1 > f2);
var g1 = 350;
var g2 = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
console.log((g2 * 2) > g1);
var h = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)
console.log(1357988018575474 % 11 ? false : true);
var i1 = 10;
var i2 = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
console.log(i1 > Math.pow(i2, 2) && i1 < Math.cbrt(i2));
var j = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)
console.log(j % 3 || j % 5 ? true : false);
var k = 'Apple';
// fill the k variable with its content 4 times
console.log(k + k + k + k);
