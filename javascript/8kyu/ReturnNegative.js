// Aldo Ignata Chandra
// Return Negative

/* TASK
In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative?

Examples:
makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
*/

// SOLUTION ( Short Version )
function makeNegative(num) {
  return -Math.abs(num);
}

// SOLUTION ( Long Version )
function makeNegative(num) {
  return num <= 0 ? num : -num;
}

// TEST CASE
console.log("TEST 1 =>", makeNegative(42));
console.log("TEST 2 =>", makeNegative(-1));
console.log("TEST 3 =>", makeNegative(7));
