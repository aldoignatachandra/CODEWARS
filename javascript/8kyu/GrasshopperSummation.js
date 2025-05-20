// Aldo Ignata Chandra
// Grasshopper - Summation

/* TASK
Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

// SOLUTION ( Short Version )
var summation = function (num) {
  return (num * (num + 1)) / 2;
};

// SOLUTION ( Long Version )
var summation = function (num) {
  var sum = 0;
  for (var i = 1; i < num + 1; i++) {
    sum += i;
  }
  return sum;
};

// TEST CASE
console.log("TEST 1 =>", summation(1));
console.log("TEST 2 =>", summation(8));
console.log("TEST 3 =>", summation(5));
