const assert = require("assert");

// Aldo Ignata Chandra
// Reversed Strings

/* TASK
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
*/

// SOLUTION ( Short Version )
function solution(str) {
  return str.split("").reverse("").join("");
}

// SOLUTION ( Long Version )
function solution(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

// TEST CASE
const test1 = solution("world");
console.log("result test1 =>", test1);
assert.strictEqual(test1, "dlrow");

const test2 = solution("hello");
console.log("result test2 =>", test2);
assert.strictEqual(test2, "olleh");

const test3 = solution("");
console.log("result test3 =>", test3);
assert.strictEqual(test3, "");

const test4 = solution("h");
console.log("result test4 =>", test4);
assert.strictEqual(test4, "h");

console.log("All tests passed!");
