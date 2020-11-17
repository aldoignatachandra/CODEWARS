//Aldo Ignata Chandra
//Find the smallest integer in the array

/* TASK
Given an array of integers your solution should find the smallest integer.

For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

//ANSWER
//Short Version
function findSmallestInt(args) {
  return Math.min(...args);
}

//Long Version
function findSmallestInt(args) {
  var smallestInt = args[0];
  for (var i = 0; i < args.length; i++) {
    if (args[i] < smallestInt) {
      smallestInt = args[i];
    }
  }
  return smallestInt;
}

//TEST
console.log("TEST 1 =>", findSmallestInt([34, 15, 88, 2]));
console.log("TEST 2 =>", findSmallestInt([1, 2, 3, 4]));
console.log("TEST 3 =>", findSmallestInt([10, 11, 12, 2]));
