const assert = require("assert");

// Aldo Ignata Chandra
// Highest And Lowest

/* TASK
In this little assignment you are given a string of space separated
numbers, and have to return the highest and lowest number.

Example:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

// SOLUTION ( Short Version )
function highAndLow(numbers) {
  const num = numbers.split(" ").map(Number);
  return `${Math.max(...num)} ${Math.min(...num)}`;
}

// SOLUTION ( Long Version )
function highAndLow(numbers) {
  const num = numbers.split(" ").map(Number);
  let maxNum = 0;
  let minNum = 0;
  for (let n of num) {
    if (n > maxNum) maxNum = n;
    if (n < minNum) minNum = n;
  }
  return maxNum + " " + minNum;
}

// TEST CASE
const test1 = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
console.log("result test1 =>", test1);
assert.strictEqual(test1, "542 -214");

console.log("All tests passed!");
