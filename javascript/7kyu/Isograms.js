const assert = require("assert");

// Aldo Ignata Chandra
// Isograms

/* TASK
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// SOLUTION
const isIsogram = (str) => {
  return new Set(str.toLowerCase()).size === str.length;
};

// TEST CASE
const test1 = isIsogram("Dermatoglyphics");
console.log("result test1 =>", test1);
assert.strictEqual(test1, true);

const test2 = isIsogram("isogram");
console.log("result test2 =>", test2);
assert.strictEqual(test2, true);

const test3 = isIsogram("aba");
console.log("result test3 =>", test3);
assert.strictEqual(test3, false);

const test4 = isIsogram("moOse");
console.log("result test4 =>", test4);
assert.strictEqual(test4, false);

const test5 = isIsogram("isIsogram");
console.log("result test5 =>", test5);
assert.strictEqual(test5, false);

const test6 = isIsogram("");
console.log("result test6 =>", test6);
assert.strictEqual(test6, true);

console.log("All tests passed!");
