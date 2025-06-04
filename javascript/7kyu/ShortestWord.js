const assert = require("assert");

// Aldo Ignata Chandra
// Shortest Word

/* TASK
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

// SOLUTION
function findShort(s) {
  return Math.min(...s.split(" ").map((word) => word.length));
}

// TEST CASE
const test1 = findShort("bitcoin take over the world maybe who knows perhaps");
console.log("result test1 =>", test1);
assert.strictEqual(test1, 3);

const test2 = findShort("turns out random test cases are easier than writing out basic ones");
console.log("result test2 =>", test2);
assert.strictEqual(test2, 3);

const test3 = findShort("Let's travel abroad shall we");
console.log("result test3 =>", test3);
assert.strictEqual(test3, 2);

console.log("All tests passed!");
