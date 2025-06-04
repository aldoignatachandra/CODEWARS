const assert = require("assert");

// Aldo Ignata Chandra
// Exes and Ohs

/* TASK
Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// SOLUTION
function XO(str) {
  const lowerStr = str.toLowerCase();
  let countX = 0;
  let countO = 0;

  for (const char of lowerStr) {
    if (char === "x") countX++;
    else if (char === "o") countO++;
  }

  return countX === countO;
}

// TEST CASE
const test1 = XO("xo");
console.log("result test1 =>", test1);
assert.strictEqual(test1, true);

const test2 = XO("XO");
console.log("result test2 =>", test2);
assert.strictEqual(test2, true);

const test3 = XO("xxxoo");
console.log("result test3 =>", test3);
assert.strictEqual(test3, false);

const test4 = XO("xxOo");
console.log("result test4 =>", test4);
assert.strictEqual(test4, true);

const test5 = XO("");
console.log("result test5 =>", test5);
assert.strictEqual(test5, true);

console.log("All tests passed!");
