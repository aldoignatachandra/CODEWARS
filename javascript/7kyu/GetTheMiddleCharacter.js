const assert = require("assert");

// Aldo Ignata Chandra
// Get The Middle Character

/* TASK
You are going to be given a word. 
Your job is to return the middle character of the word. 
If the word's length is odd, 
return the middle character. 
If the word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"

#Input
A word (string) of length 0 < str < 1000 (In javascript you may get slightly 
more than 1000 in some test cases due to an error in the test cases). 
You do not need to test for this. This is only here to tell you
that you do not need to worry about your solution timing out.

#Output
The middle character(s) of the word represented as a string.
*/

// SOLUTION ( Short Version )
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// SOLUTION ( Long Version )
function getMiddle(s) {
  let position, length;
  if (s.length % 2 == 0) {
    position = s.length / 2 - 1;
    length = 2;
  } else {
    position = (s.length - 1) / 2;
    length = 1;
  }
  return s.substring(position, position + length);
}

// TEST CASE
const test1 = getMiddle("test");
console.log("result test1 =>", test1);
assert.strictEqual(test1, "es");

const test2 = getMiddle("testing");
console.log("result test2 =>", test2);
assert.strictEqual(test2, "t");

const test3 = getMiddle("middle");
console.log("result test3 =>", test3);
assert.strictEqual(test3, "dd");

const test4 = getMiddle("A");
console.log("result test4 =>", test4);
assert.strictEqual(test4, "A");

console.log("All tests passed!");
