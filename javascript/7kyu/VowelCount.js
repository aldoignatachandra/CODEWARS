const assert = require("assert");

// Aldo Ignata Chandra
// Vowel Count

/* TASK
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces.
*/

// SOLUTION ( Short Version )
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// SOLUTION ( Long Version )
function getCount(str) {
  let vowelsCount = 0;
  let vowel_list = "aeiouAEIOU";

  for (let x = 0; x < str.length; x++) {
    if (vowel_list.indexOf(str[x]) !== -1) {
      vowelsCount += 1;
    }
  }

  return vowelsCount;
}

// TEST CASE
const test1 = getCount("ARKADEMY"); // A, A, E => 3 vowels
console.log("result test1 =>", test1);
assert.strictEqual(test1, 3);

const test2 = getCount("ALDO"); // A, O => 2 vowels
console.log("result test2 =>", test2);
assert.strictEqual(test2, 2);

const test3 = getCount("VIRUS"); // I, U => 2 vowels
console.log("result test3 =>", test3);
assert.strictEqual(test3, 2);

console.log("All tests passed!");
