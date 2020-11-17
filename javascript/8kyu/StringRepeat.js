//Aldo Ignata Chandra
//String Repeat

/* TASK
Write a function called repeat_str which repeats the given string src exactly count times.

Examples:
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

//ANSWER
//Short Version
function repeatStr(n, s) {
  return s.repeat(n);
}

//Long Version
function repeatStr(n, s) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += s;
  }
  return res;
}

//TEST
console.log("TEST 1 =>", repeatStr(3, "*"));
console.log("TEST 2 =>", repeatStr(5, "#"));
console.log("TEST 3 =>", repeatStr(2, "ha "));
