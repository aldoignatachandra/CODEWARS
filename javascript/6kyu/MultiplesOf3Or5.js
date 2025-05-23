const assert = require("assert");

// Aldo Ignata Chandra
// Multiples of 3 or 5

/* TASK
If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// SOLUTION
function solution(number) {
  var sum = 0;
  for (var i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// TEST CASE
const test1 = solution(10);
console.log("result test1 => ", test1);
assert.deepStrictEqual(test1, 23);

const test2 = solution(3);
console.log("result test2 => ", test2);
assert.deepStrictEqual(test2, 0);

const test3 = solution(5);
console.log("result test3 => ", test3);
assert.deepStrictEqual(test3, 3);

const test4 = solution(7);
console.log("result test4 => ", test4);
assert.deepStrictEqual(test4, 14);

console.log("All tests passed!");
