//Aldo Ignata Chandra
//List Filtering

/* TASK
In this kata you will create a function that takes 
a list of non-negative integers and strings and returns 
a new list with the strings filtered out.

EXAMPLE
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

//ANSWER
//Short Answer
function filter_list(l) {
  return l.filter((n) => Number(n) === n);
}

//Long Answer
function filter_list(l) {
  let list = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      list.push(l[i]);
    }
  }
  return list;
}

//TEST
console.log("TEST 1 =>", filter_list([1, 2, "a", "b"]));
console.log("TEST 2 =>", filter_list([1, "a", "b", 0, 15]));
console.log("TEST 3 =>", filter_list([1, 2, "aasf", "1", "123", 123]));
