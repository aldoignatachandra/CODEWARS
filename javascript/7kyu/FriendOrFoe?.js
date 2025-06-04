const assert = require("assert");

// Aldo Ignata Chandra
// Friend Or Foe ?

/* TASK
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

Input = ["Peter", "Stephen", "Joe"]
Output = []
Input strings will only contain letters.
Note: keep the original order of the names in the output.
*/

// SOLUTION
function friend(friends) {
  return friends.filter((f) => f.length === 4);
}

// TEST CASE
const test1 = friend(["Ryan", "Kieran", "Mark"]);
console.log("result test1 =>", test1);
assert.deepStrictEqual(test1, ["Ryan", "Mark"], "Test case 1 failed");

const test2 = friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]);
console.log("result test2 =>", test2);
assert.deepStrictEqual(test2, ["Ryan"], "Test case 2 failed");

const test3 = friend([
  "Jimm",
  "Cari",
  "aret",
  "truehdnviegkwgvke",
  "sixtyiscooooool",
]);
console.log("result test3 =>", test3);
assert.deepStrictEqual(test3, ["Jimm", "Cari", "aret"], "Test case 3 failed");

const test4 = friend(["Love", "Your", "Face", "1"]);
console.log("result test4 =>", test4);
assert.deepStrictEqual(test4, ["Love", "Your", "Face"], "Test case 4 failed");

console.log("All tests passed!");
