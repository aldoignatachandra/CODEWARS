const assert = require("assert");

// Aldo Ignata Chandra
// Find The Odd Int

/* TASK
Implement a function that computes the difference between two lists.
The function should remove all occurrences of elements from the first list (a) that are present in the second list (b).
The order of elements in the first list should be preserved in the result.

Examples
If a = [1, 2] and b = [1], the result should be [2].

If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].
*/

// SOLUTION
function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}

// TEST CASE
const test1 = arrayDiff([1, 2], [1]);
console.log("result test1 =>", test1);
assert.deepStrictEqual(test1, [2], "a was [1,2], b was [1]");

const test2 = arrayDiff([1, 2, 2], [1]);
console.log("result test2 =>", test2);
assert.deepStrictEqual(test2, [2, 2], "a was [1,2,2], b was [1]");

const test3 = arrayDiff([1, 2, 2], [2]);
console.log("result test3 =>", test3);
assert.deepStrictEqual(test3, [1], "a was [1,2,2], b was [2]");

const test4 = arrayDiff([1, 2, 2], []);
console.log("result test4 =>", test4);
assert.deepStrictEqual(test4, [1, 2, 2], "a was [1,2,2], b was []");

const test5 = arrayDiff([], [1, 2]);
console.log("result test5 =>", test5);
assert.deepStrictEqual(test5, [], "a was [], b was [1,2]");

const test6 = arrayDiff([1, 2, 3], [1, 2]);
console.log("result test6 =>", test6);
assert.deepStrictEqual(test6, [3], "a was [1,2,3], b was [1,2]");

console.log("All tests passed!");
