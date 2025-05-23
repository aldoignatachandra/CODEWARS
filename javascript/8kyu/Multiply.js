const assert = require("assert");

// Aldo Ignata Chandra
// Multiply

/* TASK
Just For Register CODEWARS
*/

// SOLUTION
function multiply(a, b) {
  return a * b;
}

// TEST CASE
const test1 = multiply(10, 7);
console.log("result test1 =>", test1);
assert.strictEqual(test1, 70);

const test2 = multiply(2, 5);
console.log("result test2 =>", test2);
assert.strictEqual(test2, 10);

const test3 = multiply(3, 5);
console.log("result test3 =>", test3);
assert.strictEqual(test3, 15);

console.log("All tests passed!");
