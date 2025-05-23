const assert = require("assert");

// Aldo Ignata Chandra
// Return Negative

/* TASK
In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative?

Examples:
makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
*/

// SOLUTION ( Short Version )
function makeNegative(num) {
  return -Math.abs(num);
}

// SOLUTION ( Long Version )
function makeNegative(num) {
  return num <= 0 ? num : -num;
}

// TEST CASE
const test1 = makeNegative(42);
console.log("result test1 =>", test1);
assert.strictEqual(test1, -42);

const test2 = makeNegative(-1);
console.log("result test2 =>", test2);
assert.strictEqual(test2, -1);

const test3 = makeNegative(7);
console.log("result test3 =>", test3);
assert.strictEqual(test3, -7);

console.log("All tests passed!");
