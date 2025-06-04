const assert = require("assert");

// Aldo Ignata Chandra
// Two To One

/* TASK
The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
They would like your help with an application form that will tell prospective members 
which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member.
Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether
the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

// SOLUTION
function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );
}

// TEST CASE
const test1 = openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);
console.log("result test1 =>", test1);
assert.deepStrictEqual(test1, ["Open", "Senior", "Open", "Senior"]);

const test2 = openOrSenior([
  [3, 12],
  [55, 1],
  [91, -2],
  [53, 23],
]);
console.log("result test2 =>", test2);
assert.deepStrictEqual(test2, ["Open", "Open", "Open", "Open"]);

const test3 = openOrSenior([
  [59, 12],
  [55, -1],
  [12, -2],
  [12, 12],
]);
console.log("result test3 =>", test3);
assert.deepStrictEqual(test3, ["Senior", "Open", "Open", "Open"]);

console.log("All tests passed!");
