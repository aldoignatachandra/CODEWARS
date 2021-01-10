//Aldo Ignata Chandra
//Highest And Lowest

/* TASK
In this little assignment you are given a string of space separated
numbers, and have to return the highest and lowest number.

Example:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

//ANSWER
//Short Answer
// function highAndLow(numbers) {
//   const num = numbers.split(" ").map(Number);
//   return `${Math.max(...num)} ${Math.min(...num)}`;
// }

//Long Answer
function highAndLow(numbers) {
  const num = numbers.split(" ").map(Number);
  let maxNum = 0;
  let minNum = 0;
  for (let n of num) {
    if (n > maxNum) {
      maxNum = n;
    }
    if (n < minNum) {
      minNum = n;
    }
  }
  return maxNum + " " + minNum;
}

//TEST
console.log("TEST 1 =>", highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
