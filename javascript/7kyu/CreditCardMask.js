const assert = require("assert");

// Aldo Ignata Chandra
// Credit Card Mask

/* TASK
Usually when you buy something, you're asked whether your credit card number, phone number or answer to 
your most secret question is still correct. However, since someone could look over your shoulder, you don't want 
that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
*/

// SOLUTION
function maskify(cc) {
  if (cc.length <= 4) return cc;

  const str = cc.slice(0, -4);
  const lastFour = cc.slice(-4);

  return str.replace(/./g, "#") + lastFour;
}

// TEST CASE
const test1 = maskify("4556364607935616");
console.log("result test1 =>", test1);
assert.strictEqual(test1, "############5616");

const test2 = maskify("1");
console.log("result test2 =>", test2);
assert.strictEqual(test2, "1");

const test3 = maskify("11111");
console.log("result test3 =>", test3);
assert.strictEqual(test3, "#1111");

console.log("All tests passed!");
