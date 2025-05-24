const assert = require("assert");

// Aldo Ignata Chandra
// Descending Order

/* TASK
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n) {
  const nums = n.toString().split("").sort((a, b) => b - a).join("");
  return Number(nums);
}

const test1 = descendingOrder(0);
console.log("result test1 =>", test1);
assert.strictEqual(test1, 0);

const test2 = descendingOrder(1);
console.log("result test2 =>", test2);
assert.strictEqual(test2, 1);

const test3 = descendingOrder(111);
console.log("result test3 =>", test3);
assert.strictEqual(test3, 111);

const test4 = descendingOrder(15);
console.log("result test4 =>", test4);
assert.strictEqual(test4, 51);

const test5 = descendingOrder(1021);
console.log("result test5 =>", test5);
assert.strictEqual(test5, 2110);

const test6 = descendingOrder(123456789);
console.log("result test6 =>", test6);
assert.strictEqual(test6, 987654321);

console.log("All tests passed!");
