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
console.log("TEST 1 =>", boolToWord(true));
console.log("TEST 2 =>", boolToWord(false));
