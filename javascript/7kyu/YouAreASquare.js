const assert = require("assert");

// Aldo Ignata Chandra
// You're a square!

/* TASK
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer;
in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

// SOLUTION
function isSquare(n) {
  if (n < 0) return false;
  return Math.sqrt(n) % 1 === 0;
}

// TEST CASE
const test1 = isSquare(-1);
console.log("result test1 =>", test1);
assert.strictEqual(
  test1,
  false,
  "-1: Negative numbers cannot be square numbers"
);

const test2 = isSquare(0);
console.log("result test2 =>", test2);
assert.strictEqual(test2, true, "0 is a square number (0 * 0)");

const test3 = isSquare(3);
console.log("result test3 =>", test3);
assert.strictEqual(test3, false, "3 is not a square number");

const test4 = isSquare(4);
console.log("result test4 =>", test4);
assert.strictEqual(test4, true, "4 is a square number (2 * 2)");

const test5 = isSquare(25);
console.log("result test5 =>", test5);
assert.strictEqual(test5, true, "25 is a square number (5 * 5)");

const test6 = isSquare(26);
console.log("result test6 =>", test6);
assert.strictEqual(test6, false, "26 is not a square number");

console.log("All tests passed!");
