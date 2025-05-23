const assert = require("assert");

// Aldo Ignata Chandra
// Convert number to reversed array of digits

/* TASK
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/

// SOLUTION ( Short Version )
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

// SOLUTION ( Long Version )
function digitize(n) {
  let rev = n.toString().split("").reverse("").join("");
  return Array.prototype.map.call(rev, (s) => {
    return Number(s);
  });
}

// TEST CASE
const digitTest1 = digitize(35231);
console.log("result test1 (digitize) =>", digitTest1);
assert.deepStrictEqual(digitTest1, [1, 3, 2, 5, 3]);

const digitTest2 = digitize(12345);
console.log("result test2 (digitize) =>", digitTest2);
assert.deepStrictEqual(digitTest2, [5, 4, 3, 2, 1]);

const digitTest3 = digitize(74263);
console.log("result test3 (digitize) =>", digitTest3);
assert.deepStrictEqual(digitTest3, [3, 6, 2, 4, 7]);

console.log("All tests passed!");
