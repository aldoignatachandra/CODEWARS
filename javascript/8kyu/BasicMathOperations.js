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
const result1 = basicOp("+", 4, 7);
console.log("result test1 =>", result1);
assert.strictEqual(result1, 11);

const result2 = basicOp("-", 15, 18);
console.log("result test2 =>", result2);
assert.strictEqual(result2, -3);

const result3 = basicOp("*", 5, 5);
console.log("result test3 =>", result3);
assert.strictEqual(result3, 25);

const result4 = basicOp("/", 49, 7);
console.log("result test4 =>", result4);
assert.strictEqual(result4, 7);
