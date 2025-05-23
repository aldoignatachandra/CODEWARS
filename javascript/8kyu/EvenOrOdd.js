const assert = require("assert");

// Aldo Ignata Chandra
// Even Or Odd

/* TASK
Create a function (or write a script in Shell) that takes an integer 
as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// SOLUTION
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// TEST CASE
const test1 = even_or_odd(10);
console.log("result test1 =>", test1);
assert.strictEqual(test1, "Even");

const test2 = even_or_odd(11);
console.log("result test2 =>", test2);
assert.strictEqual(test2, "Odd");

const test3 = even_or_odd(12);
console.log("result test3 =>", test3);
assert.strictEqual(test3, "Even");

console.log("All tests passed!");
