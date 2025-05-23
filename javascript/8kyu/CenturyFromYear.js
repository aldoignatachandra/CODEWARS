const assert = require("assert");

// Aldo Ignata Chandra
// Century From Year

/* TASK
Introduction
The first century spans from the year 1 up to and including the year 100, 
The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)

Hope you enjoy it .. Awaiting for Best Practice Codes

Enjoy Learning !!!
*/

// SOLUTION ( Short Version )
function century(year) {
  return Math.ceil(year / 100);
}

// SOLUTION ( Long Version )
function century(year) {
  if (year <= 100) return 1;

  let cen = parseInt(year / 100);
  let rem = year % 100;

  return rem === 0 ? cen : cen + 1;
}

// TEST CASE
console.log("TEST 1 =>", century(1705));
console.log("TEST 2 =>", century(1900));
console.log("TEST 3 =>", century(1601));
console.log("TEST 4 =>", century(2000));
console.log("TEST 5 =>", century(89));
