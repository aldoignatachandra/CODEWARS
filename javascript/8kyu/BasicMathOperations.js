const assert = require("assert");

// Aldo Ignata Chandra
// Basic Mathematical Operations

/* TASK
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
*/

// SOLUTION ( Short Version )
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// SOLUTION ( Long Version )
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
}

// TEST CASE
console.log("TEST 1 =>", basicOp("+", 4, 7));
console.log("TEST 2 =>", basicOp("-", 15, 18));
console.log("TEST 3 =>", basicOp("*", 5, 5));
console.log("TEST 4 =>", basicOp("/", 49, 7));
