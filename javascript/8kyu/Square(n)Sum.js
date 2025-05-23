const assert = require("assert");

// Aldo Ignata Chandra
// Square(n) Sum

/* TASK
Complete the square sum function so that it squares each number passed into it 
and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

// SOLUTION ( Short Version )
function squareSum(numbers) {
  return numbers.reduce((a, b) => a + b * b, 0);
}

// SOLUTION ( Long Version )
function squareSum(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num * num;
  }
  return sum;
}

// TEST CASE
const test1 = squareSum([1, 2]);
console.log("result test1 =>", test1);
assert.strictEqual(test1, 5);

const test2 = squareSum([0, 3, 4, 5]);
console.log("result test2 =>", test2);
assert.strictEqual(test2, 50);

console.log("All tests passed!");
