const assert = require("assert");

// Aldo Ignata Chandra
// Who likes it?

/* TASK
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item.
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

// SOLUTION
function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// TEST CASE
const test1 = likes([]);
console.log("result test1 =>", test1);
assert.strictEqual(test1, "no one likes this");

const test2 = likes(["Peter"]);
console.log("result test2 =>", test2);
assert.strictEqual(test2, "Peter likes this");

const test3 = likes(["Jacob", "Alex"]);
console.log("result test3 =>", test3);
assert.strictEqual(test3, "Jacob and Alex like this");

const test4 = likes(["Max", "John", "Mark"]);
console.log("result test4 =>", test4);
assert.strictEqual(test4, "Max, John and Mark like this");

const test5 = likes(["Alex", "Jacob", "Mark", "Max"]);
console.log("result test5 =>", test5);
assert.strictEqual(test5, "Alex, Jacob and 2 others like this");

console.log("All tests passed!");
