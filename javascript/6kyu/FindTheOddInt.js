const assert = require("assert");

// Aldo Ignata Chandra
// Find The Odd Int

/* TASK
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// SOLUTION ( Long Version )
function findOdd(A) {
  let countNums = {};

  for (const num of A) {
    countNums[num] = (countNums[num] || 0) + 1;
  }

  for (const key in countNums) {
    if (countNums[key] % 2 !== 0) {
      return Number(key);
    }
  }
}

// SOLUTION ( Short Version )
function findOdd(xs) {
  return xs.reduce((a, b) => a ^ b);
}

// TEST CASE
const test1 = findOdd([7]);
console.log("result test1 =>", test1);
assert.strictEqual(test1, 7, "Incorrect answer for input=[7]");

const test2 = findOdd([0]);
console.log("result test2 =>", test2);
assert.strictEqual(test2, 0, "Incorrect answer for input=[0]");

const test3 = findOdd([1, 1, 2]);
console.log("result test3 =>", test3);
assert.strictEqual(test3, 2, "Incorrect answer for input=[1,1,2]");

const test4 = findOdd([0, 1, 0, 1, 0]);
console.log("result test4 =>", test4);
assert.strictEqual(test4, 0, "Incorrect answer for input=[0,1,0,1,0]");

const test5 = findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
console.log("result test5 =>", test5);
assert.strictEqual(
  test5,
  4,
  "Incorrect answer for input=[1,2,2,3,3,3,4,3,3,3,2,2,1]"
);

const test6 = findOdd([
  20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5,
]);
console.log("result test6 =>", test6);
assert.strictEqual(
  test6,
  5,
  "Incorrect answer for input=[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]"
);

const test7 = findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);
console.log("result test7 =>", test7);
assert.strictEqual(
  test7,
  -1,
  "Incorrect answer for input=[1,1,2,-2,5,2,4,4,-1,-2,5]"
);

const test8 = findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]);
console.log("result test8 =>", test8);
assert.strictEqual(
  test8,
  5,
  "Incorrect answer for input=[20,1,1,2,2,3,3,5,5,4,20,4,5]"
);

const test9 = findOdd([10]);
console.log("result test9 =>", test9);
assert.strictEqual(test9, 10, "Incorrect answer for input=[10]");

const test10 = findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]);
console.log("result test10 =>", test10);
assert.strictEqual(
  test10,
  10,
  "Incorrect answer for input=[1,1,1,1,1,1,10,1,1,1,1]"
);

const test11 = findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]);
console.log("result test11 =>", test11);
assert.strictEqual(
  test11,
  1,
  "Incorrect answer for input=[5,4,3,2,1,5,4,3,2,10,10]"
);

console.log("All tests passed!");
