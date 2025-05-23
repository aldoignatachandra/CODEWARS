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
const test1 = litres(2);
console.log("result test1 =>", test1);
assert.strictEqual(test1, 1);

const test2 = litres(1.4);
console.log("result test2 =>", test2);
assert.strictEqual(test2, 0);

const test3 = litres(12.3);
console.log("result test3 =>", test3);
assert.strictEqual(test3, 6);

const test4 = litres(0.82);
console.log("result test4 =>", test4);
assert.strictEqual(test4, 0);

const test5 = litres(11.8);
console.log("result test5 =>", test5);
assert.strictEqual(test5, 5);

const test6 = litres(1787);
console.log("result test6 =>", test6);
assert.strictEqual(test6, 893);

const test7 = litres(0);
console.log("result test7 =>", test7);
assert.strictEqual(test7, 0);

console.log("All tests passed!");
