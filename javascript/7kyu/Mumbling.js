const assert = require("assert");

// Aldo Ignata Chandra
// Mumbling

/* TASK
This time no story, no theory. The examples below 
show you how to write function accum:

EXAMPLE
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// SOLUTION ( Short Version )
function accum(s) {
  return [...s.toUpperCase()].reduce(
    (prev, cur, i) => prev + "-" + cur + cur.toLowerCase().repeat(i)
  );
}

// SOLUTION ( Long Version )
function accum(s) {
  const str = [];
  const lowerStr = s.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    let tempStr = lowerStr[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      tempStr += lowerStr[i];
    }
    str.push(tempStr);
  }
  return str.join("-");
}

// TEST CASE
const test1 = accum("ZpglnRxqenU");
console.log("result test1 =>", test1);
assert.strictEqual(
  test1,
  "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
);

const test2 = accum("NyffsGeyylB");
console.log("result test2 =>", test2);
assert.strictEqual(
  test2,
  "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Lllllllll-Bbbbbbbbbb"
);

const test3 = accum("MjtkuBovqrU");
console.log("result test3 =>", test3);
assert.strictEqual(
  test3,
  "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
);

const test4 = accum("EvidjUnokmM");
console.log("result test4 =>", test4);
assert.strictEqual(
  test4,
  "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
);

const test5 = accum("HbideVbxncC");
console.log("result test5 =>", test5);
assert.strictEqual(
  test5,
  "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
);

console.log("All tests passed!");
