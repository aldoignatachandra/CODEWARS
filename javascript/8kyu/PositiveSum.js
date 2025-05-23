const assert = require("assert");

// Aldo Ignata Chandra
// Positive Sum

/* TASK
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/

// SOLUTION
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
console.log("TEST 1 =>", positiveSum([1, -4, 7, 12]));
console.log("TEST 2 =>", positiveSum([2, 0, 3, 10]));
console.log("TEST 3 =>", positiveSum([0, -4, -2, 11]));
