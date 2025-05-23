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
console.log("TEST 1 => ", digitize(35231));
console.log("TEST 2 => ", digitize(12345));
console.log("TEST 3 => ", digitize(74263));
