const assert = require("assert");

// Aldo Ignata Chandra
// Disemvowel Trolls

/* TASK
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  let arr = str.split("");
  let vowel_list = "aeiouAEIOU";

  for (let i = 0; i < arr.length; i++) {
    if (vowel_list.indexOf(arr[i]) !== -1) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr.join("");
}

const test1 = disemvowel("This website is for losers LOL!");
console.log("result test1 =>", test1);
assert.strictEqual(test1, "Ths wbst s fr lsrs LL!");

const test2 = disemvowel(
  "No offense but,\nYour writing is among the worst I've ever read"
);
console.log("result test2 =>", test2);
assert.strictEqual(test2, "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");

const test3 = disemvowel("What are you, a communist?");
console.log("result test3 =>", test3);
assert.strictEqual(test3, "Wht r y,  cmmnst?");

console.log("All tests passed!");
