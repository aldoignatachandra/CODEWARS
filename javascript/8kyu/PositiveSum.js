const assert = require("assert");

// Aldo Ignata Chandra
// Positive Sum

/* TASK
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/

// SOLUTION ( Short Version )
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// SOLUTION ( Long Version )
function positiveSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// TEST CASE
const test1 = positiveSum([1, -4, 7, 12]);
console.log("result test1 =>", test1);
assert.strictEqual(test1, 20);

const test2 = positiveSum([2, 0, 3, 10]);
console.log("result test2 =>", test2);
assert.strictEqual(test2, 15);

const test3 = positiveSum([0, -4, -2, 11]);
console.log("result test3 =>", test3);
assert.strictEqual(test3, 11);

console.log("All tests passed!");
