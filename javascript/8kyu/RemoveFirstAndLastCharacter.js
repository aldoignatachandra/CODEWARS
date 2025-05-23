const assert = require("assert");

// Aldo Ignata Chandra
// Remove First and Last Character

/* TASK
It's pretty straightforward. Your goal is to create a function that 
removes the first and last characters of a string. You're given one parameter, 
the original string. You don't have to worry with strings with less than two characters.
*/

// SOLUTION ( Short Version )
function removeChar(str) {
  return str.slice(1, -1);
}

// SOLUTION ( Long Version )
function removeChar(str) {
  let delFirstChar = str.substring(1);
  let delLastChar = delFirstChar.substring(0, delFirstChar.length - 1);
  return delLastChar;
}

// TEST CASE
const test1 = removeChar("eloquent");
console.log("result test1 =>", test1);
assert.strictEqual(test1, "loquen");

const test2 = removeChar("country");
console.log("result test2 =>", test2);
assert.strictEqual(test2, "ountr");

const test3 = removeChar("person");
console.log("result test3 =>", test3);
assert.strictEqual(test3, "erso");

console.log("All tests passed!");
