const assert = require("assert");

// Aldo Ignata Chandra
// List Filtering

/* TASK
In this kata you will create a function that takes 
a list of non-negative integers and strings and returns 
a new list with the strings filtered out.

EXAMPLE
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

// SOLUTION ( Short Version )
function filter_list(l) {
  return l.filter((n) => Number(n) === n);
}

// SOLUTION ( Long Version )
function filter_list(l) {
  let list = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      list.push(l[i]);
    }
  }
  return list;
}

// TEST CASE
const test1 = filter_list([1, 2, "a", "b"]);
console.log("result test1 =>", test1);
assert.deepStrictEqual(test1, [1, 2]);

const test2 = filter_list([1, "a", "b", 0, 15]);
console.log("result test2 =>", test2);
assert.deepStrictEqual(test2, [1, 0, 15]);

const test3 = filter_list([1, 2, "aasf", "1", "123", 123]);
console.log("result test3 =>", test3);
assert.deepStrictEqual(test3, [1, 2, 123]);

console.log("All tests passed!");
