//Aldo Ignata Chandra
//Even Or Odd

/* TASK
Create a function (or write a script in Shell) that takes an integer 
as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

//ANSWER
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

//TEST
console.log("TEST 1 =>", even_or_odd(10));
console.log("TEST 2 =>", even_or_odd(11));
console.log("TEST 3 =>", even_or_odd(12));
