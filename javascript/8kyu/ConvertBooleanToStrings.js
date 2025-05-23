const assert = require("assert");

// Aldo Ignata Chandra
// Convert boolean values to strings 'Yes' or 'No'

/* TASK
Complete the method that takes a boolean value and return a "Yes" string 
for true, or a "No" string for false.
*/

// SOLUTION ( Short Version )
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// SOLUTION ( Long Version )
function boolToWord(bool) {
  if (bool) return "Yes";
  else return "No";
}

// TEST CASE
const boolTest1 = boolToWord(true);
console.log("result test1 (boolToWord) =>", boolTest1);
assert.strictEqual(boolTest1, "Yes");

const boolTest2 = boolToWord(false);
console.log("result test2 (boolToWord) =>", boolTest2);
assert.strictEqual(boolTest2, "No");
