//Aldo Ignata Chandra
//Positive Sum

/* TASK
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/

//ANSWER
//Short Version
function positiveSum (arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
} 

//Long Version
function positiveSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
}