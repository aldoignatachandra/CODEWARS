const assert = require("assert");

// Aldo Ignata Chandra
// Two To One

/* TASK
Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string (alphabetical ascending), the longest possible, 
containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// SOLUTION
function longest(s1, s2) {
  const str = s1 + s2;
  return [...new Set(str.split("").sort())].join("");
}

// TEST CASE
const test1 = longest("aretheyhere", "yestheyarehere");
console.log("result test1 =>", test1);
assert.strictEqual(test1, "aehrsty");

const test2 = longest("loopingisfunbutdangerous", "lessdangerousthancoding");
console.log("result test2 =>", test2);
assert.strictEqual(test2, "abcdefghilnoprstu");

const test3 = longest("inmanylanguages", "theresapairoffunctions");
console.log("result test3 =>", test3);
assert.strictEqual(test3, "acefghilmnoprstuy");

console.log("All tests passed!");
