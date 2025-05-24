const assert = require("assert");

// Aldo Ignata Chandra
// Strings, Strings, Strings (Easy)

/* TASK
The toString() method has been disabled for booleans, numbers, arrays and objects.
Your goal is to retrive toString() for the following data types.

I. Booleans
For booleans:
true should be converted to "true"
false should be converted to "false"

II. Numbers
For numbers, conversion should be as follows:
(3).toString() === "3"
(3.14).toString() === "3.14"
(-78).toString() === "-78"
Math.PI.toString() === "3.141592653589793"

III. Arrays
For the purposes of this Kata, you will only be expected to convert arrays with numbers only into strings. 
However, on top of fixing it, we would also like to improve it as well. 
We would like to keep the square brackets ([]) around the "stringified" array as it would be seen in Javascript code. For example:
[].toString() === "[]"
[1].toString() === "[1]"
[2,4,8,17].toString() === "[2, 4, 8, 17]"
[Math.PI, Math.E].toString() === "[3.141592653589793,2.718281828459045]"

As you may have noticed in the examples above, when the array has more than one element, some of the strings have spaces 
as well as commas separating each item but some strings do not. For the purposes of this Kata whether there are whitespaces 
or not does not matter for stringified arrays - before conducting the tests your input is stripped of all whitespace.
*/

// SOLUTION
Number.prototype.toString = function () {
  return "" + this;
};
Array.prototype.toString = function () {
  return "[" + this.join(",") + "]";
};
Boolean.prototype.toString = function () {
  return "" + this;
};
Object.prototype.toString = function () {
  return "" + this;
};

// TEST CASE
const test1 = (123).toString();
console.log("result test1 =>", test1);
assert.strictEqual(test1, "123");

const test2 = Math.PI.toString();
console.log("result test2 =>", test2);
assert.strictEqual(test2, "3.141592653589793");

const test3 = Math.E.toString();
console.log("result test3 =>", test3);
assert.strictEqual(test3, "2.718281828459045");

const test4 = true.toString();
console.log("result test4 =>", test4);
assert.strictEqual(test4, "true");

const test5 = false.toString();
console.log("result test5 =>", test5);
assert.strictEqual(test5, "false");

const test6 = [1, 2, 3, 4, 5].toString().replace(/\s+/g, "");
console.log("result test6 =>", test6);
assert.strictEqual(test6, "[1,2,3,4,5]");

console.log("All tests passed!");
