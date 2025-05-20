// Aldo Ignata Chandra
// Counting sheep...

/* TASK
Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep 
present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

  The correct answer would be 17.

  Hint: Don't forget to check for bad values like null/undefined
*/

// SOLUTION ( Short Version )
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((x) => x).length;
}

// SOLUTION ( Long Version )
function countSheeps(arrayOfSheep) {
  let res = 0;
  for (let sheep of arrayOfSheep) {
    sheep ? res++ : res;
  }
  return res;
}

// TEST CASE
console.log(
  "TEST 1 =>",
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
