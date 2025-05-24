const assert = require("assert");

// Aldo Ignata Chandra
// Find the smallest integer in the array

/* TASK
Given an array of integers your solution should find the smallest integer.

For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

// SOLUTION ( Short Version )
function findSmallestInt(args) {
  return Math.min(...args);
}

// SOLUTION ( Long Version )
function findSmallestInt(args) {
  let smallestInt = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < smallestInt) {
      smallestInt = args[i];
    }
  }
  return smallestInt;
}

// TEST CASE
const test1 = findSmallestInt([34, 15, 88, 2]);
console.log("result test1 =>", test1);
assert.strictEqual(test1, 2);

const test2 = findSmallestInt([1, 2, 3, 4]);
console.log("result test2 =>", test2);
assert.strictEqual(test2, 1);

const test3 = findSmallestInt([10, 11, 12, 2]);
console.log("result test3 =>", test3);
assert.strictEqual(test3, 2);

console.log("All tests passed!");
