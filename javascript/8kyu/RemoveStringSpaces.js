const assert = require("assert");

// Aldo Ignata Chandra
// Remove String Spaces

/* TASK
Simple, remove the spaces from the string, then return the resultant string.
*/

// SOLUTION ( Short Version ) 1
function noSpace(x) {
  return x.replace(/\s+/g, "");
}

// SOLUTION ( Short Version ) 2
function noSpace(x) {
  return x.split(" ").join("");
}

// SOLUTION ( Long Version )
function noSpace(x) {
  var result = "";
  for (var index = 0; index < x.length; index++) {
    if (x[index] !== " ") {
      result += x[index];
    }
  }
  return result;
}

// TEST CASE
const test1 = noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");
console.log("result test1 =>", test1);
assert.strictEqual(test1, "8j8mBliB8gimjB8B8jlB");

const test2 = noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd");
console.log("result test2 =>", test2);
assert.strictEqual(test2, "88Bifk8hB8BB8BBBB888chl8BhBfd");

const test3 = noSpace("8aaaaa dddd r     ");
console.log("result test3 =>", test3);
assert.strictEqual(test3, "8aaaaaddddr");

console.log("All tests passed!");
