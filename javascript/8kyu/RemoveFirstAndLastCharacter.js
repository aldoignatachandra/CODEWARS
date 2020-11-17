//Aldo Ignata Chandra
//Remove First and Last Character

/* TASK
It's pretty straightforward. Your goal is to create a function that 
removes the first and last characters of a string. You're given one parameter, 
the original string. You don't have to worry with strings with less than two characters.
*/

//ANSWER
//Short Version
function removeChar(str) {
  return str.slice(1, -1);
}

//Long Version
function removeChar(str) {
  let delFirstChar = str.substring(1);
  let delLastChar = delFirstChar.substring(0, delFirstChar.length - 1);
  return delLastChar;
}

//TEST
console.log("TEST 1 =>", removeChar("eloquent"));
console.log("TEST 2 =>", removeChar("country"));
console.log("TEST 3 =>", removeChar("person"));
