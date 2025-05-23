const assert = require("assert");

// Aldo Ignata Chandra
// Keep Hydrated!

/* TASK
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

// SOLUTION
function litres(time) {
  return Math.floor(time * 0.5);
}

// TEST CASE
console.log("TEST 1 => ", litres(2));
console.log("TEST 2 => ", litres(1.4));
console.log("TEST 3 => ", litres(12.3));
console.log("TEST 4 => ", litres(0.82));
console.log("TEST 5 => ", litres(11.8));
console.log("TEST 6 => ", litres(1787));
console.log("TEST 7 => ", litres(0));
