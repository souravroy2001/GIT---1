/*

4. Given an array of numbers, first filter out the odd numbers, then square the remaining numbers, and finally, calculate the sum of the squared numbers using filter(), map(), and reduce(). 

Input: [1, 2, 3, 4, 5] Expected Output: 20 

Explanation: Filtered even numbers: [2, 4], squared: [4, 16], sum: 20

*/

let arr = [1, 2, 3, 4, 5];

function evenSquaredSumFilter(arr) {
  return arr
    .filter(function (element) {
      if (element % 2 === 0) {
        return element;
      }
    })
    .map(function (element) {
      return element ** 2;
    })
    .reduce(function (a, b) {
      return a + b;
    });
}

console.log(evenSquaredSumFilter(arr)); //output : 20
