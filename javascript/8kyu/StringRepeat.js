const assert = require("assert");

// Aldo Ignata Chandra
// String Repeat

/* TASK
Write a function called repeat_str which repeats the given string src exactly count times.

Examples:
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

// SOLUTION ( Short Version )
function repeatStr(n, s) {
  return s.repeat(n);
}

// SOLUTION ( Long Version )
function repeatStr(n, s) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += s;
  }
  return res;
}

// TEST CASE
const test1 = repeatStr(3, "*");
console.log("result test1 =>", test1);
assert.strictEqual(test1, "***");

const test2 = repeatStr(5, "#");
console.log("result test2 =>", test2);
assert.strictEqual(test2, "#####");

const test3 = repeatStr(2, "ha ");
console.log("result test3 =>", test3);
assert.strictEqual(test3, "ha ha ");

console.log("All tests passed!");
