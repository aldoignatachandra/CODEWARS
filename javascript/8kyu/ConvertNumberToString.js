const assert = require("assert");

// Aldo Ignata Chandra
// Convert a Number to a String!

/* TASK
We need a function that can transform a number into a string.
What ways of achieving this do you know?

Examples:
numberToString(123); // returns '123';`   
numberToString(999); // returns '999';`
*/

// SOLUTION
function numberToString(num) {
  return num.toString();
}

// TEST CASE
const numStrTest1 = numberToString(67);
console.log("result test1 (numberToString) =>", numStrTest1);
assert.strictEqual(numStrTest1, "67");

const numStrTest2 = numberToString(1);
console.log("result test2 (numberToString) =>", numStrTest2);
assert.strictEqual(numStrTest2, "1");

const numStrTest3 = numberToString(-1);
console.log("result test3 (numberToString) =>", numStrTest3);
assert.strictEqual(numStrTest3, "-1");
