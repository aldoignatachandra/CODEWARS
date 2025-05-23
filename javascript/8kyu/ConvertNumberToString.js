const assert = require("assert");

// Aldo Ignata Chandra
// Convert a Number to a String!

/* TASK
We need a function that can transform a number into a string.
What ways of achieving this do you know?

Examples:
numberToString(123); // returns '123';`   
numberToString(999); // returns '999';`
*/

// SOLUTION
function numberToString(num) {
  return num.toString();
}

// TEST CASE
console.log("TEST 1 =>", numberToString(67));
console.log("TEST 2 =>", numberToString(1));
console.log("TEST 3 =>", numberToString(-1));
