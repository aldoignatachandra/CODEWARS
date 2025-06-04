const assert = require("assert");

// Aldo Ignata Chandra
// Sum of two lowest positive integers

/* TASK
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

// SOLUTION
function sumTwoSmallestNumbers(numbers) {
  const numOrder = numbers.sort((a, b) => a - b);
  return numOrder[0] + numOrder[1];
}

// TEST CASE
const test1 = sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
console.log("result test1 =>", test1);
assert.strictEqual(test1, 13, "Sum should be 13");

const test2 = sumTwoSmallestNumbers([15, 28, 4, 2, 43]);
console.log("result test2 =>", test2);
assert.strictEqual(test2, 6, "Sum should be 6");

const test3 = sumTwoSmallestNumbers([3, 87, 45, 12, 7]);
console.log("result test3 =>", test3);
assert.strictEqual(test3, 10, "Sum should be 10");

const test4 = sumTwoSmallestNumbers([23, 71, 33, 82, 1]);
console.log("result test4 =>", test4);
assert.strictEqual(test4, 24, "Sum should be 24");

const test5 = sumTwoSmallestNumbers([52, 76, 14, 12, 4]);
console.log("result test5 =>", test5);
assert.strictEqual(test5, 16, "Sum should be 16");

console.log("All tests passed!");
