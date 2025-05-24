const assert = require("assert");

// Aldo Ignata Chandra
// Square Every Digit

/* TASK
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 7^2 is 49, 6^2 is 36, and 5^2 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/

function squareDigits(num) {
  let arr = String(num).split("");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]) ** 2;
  }

  return Number(arr.join(""));
}

const test1 = squareDigits(3212);
console.log("result test1 =>", test1);
assert.strictEqual(test1, 9414);

const test2 = squareDigits(2112);
console.log("result test2 =>", test2);
assert.strictEqual(test2, 4114);

const test3 = squareDigits(0);
console.log("result test3 =>", test3);
assert.strictEqual(test3, 0);

console.log("All tests passed!");
