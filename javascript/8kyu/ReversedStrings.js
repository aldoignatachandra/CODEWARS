//Aldo Ignata Chandra
//Reversed Strings

/* TASK
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
*/

//ANSWER
//Short Version
function solution(str) {
  return str.split("").reverse("").join("");
}

//Long Version
function solution(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

//TEST
console.log("TEST 1 =>", solution("world"));
console.log("TEST 2 =>", solution("hello"));
console.log("TEST 3 =>", solution(""));
console.log("TEST 4 =>", solution("h"));
