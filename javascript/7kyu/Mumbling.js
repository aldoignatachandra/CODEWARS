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
console.log("TEST 1 =>", accum("ZpglnRxqenU"));
console.log("TEST 2 =>", accum("NyffsGeyylB"));
console.log("TEST 3 =>", accum("MjtkuBovqrU"));
console.log("TEST 4 =>", accum("EvidjUnokmM"));
console.log("TEST 5 =>", accum("HbideVbxncC"));
