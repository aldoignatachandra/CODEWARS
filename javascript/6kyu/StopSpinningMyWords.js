const assert = require("assert");

// Aldo Ignata Chandra
// Stop gninnipS My sdroW!

/* TASK
Write a function that takes in a string of one or more words, and returns the same string, 
but with all words that have five or more letters reversed (Just like the name of this Kata).
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

// SOLUTION
function spinWords(string) {
  let strArr = string.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5) {
      strArr[i] = strArr[i].split("").reverse().join("");
    }
  }
  return strArr.join(" ");
}

// TEST CASE
const test1 = spinWords("Welcome");
console.log("result test1 =>", test1);
assert.strictEqual(test1, "emocleW");

const test2 = spinWords("Hey fellow warriors");
console.log("result test2 =>", test2);
assert.strictEqual(test2, "Hey wollef sroirraw");

const test3 = spinWords("This is a test");
console.log("result test3 =>", test3);
assert.strictEqual(test3, "This is a test");

const test4 = spinWords("This is another test");
console.log("result test4 =>", test4);
assert.strictEqual(test4, "This is rehtona test");

const test5 = spinWords("You are almost to the last test");
console.log("result test5 =>", test5);
assert.strictEqual(test5, "You are tsomla to the last test");

const test6 = spinWords("Just kidding there is still one more");
console.log("result test6 =>", test6);
assert.strictEqual(test6, "Just gniddik ereht is llits one more");

const test7 = spinWords("Seriously this is the last one");
console.log("result test7 =>", test7);
assert.strictEqual(test7, "ylsuoireS this is the last one");

console.log("All tests passed!");
