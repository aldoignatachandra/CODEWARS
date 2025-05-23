const assert = require("assert");

// Aldo Ignata Chandra
// Opposite Number

/* TASK
Very simple, given a number, find its opposite.

Examples:
1: -1
14: -14
-34: 34
*/

// SOLUTION
function opposite(number) {
  return number * -1;
}

// TEST CASE
const test1 = opposite(17);
console.log("result test1 =>", test1);
assert.strictEqual(test1, -17);

const test2 = opposite(-1);
console.log("result test2 =>", test2);
assert.strictEqual(test2, 1);

const test3 = opposite(10);
console.log("result test3 =>", test3);
assert.strictEqual(test3, -10);

console.log("All tests passed!");
