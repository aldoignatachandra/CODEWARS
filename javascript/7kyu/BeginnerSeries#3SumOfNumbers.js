const assert = require("assert");

// Aldo Ignata Chandra
// Beginner Series #3 Sum Of Numbers

/* TASK
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.
If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

// SOLUTION
const getSum = (a, b) => {
  const lower = Math.min(a, b);
  const higher = Math.max(a, b);
  const n = higher - lower + 1;
  return (n * (lower + higher)) / 2;
};

// TEST CASE
const test1 = getSum(0, -1);
console.log("result test1 =>", test1);
assert.strictEqual(test1, -1);

const test2 = getSum(0, 1);
console.log("result test2 =>", test2);
assert.strictEqual(test2, 1);

const test3 = getSum(2, 2);
console.log("result test3 =>", test3);
assert.strictEqual(test3, 2);

console.log("All tests passed!");
