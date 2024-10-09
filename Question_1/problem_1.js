/*

1. Given an array of numbers, use map() to create a new array that contains the squares of each number. Input: [2, 3, 4, 5]

Expected Output: [4, 9, 16, 25]

*/

let arr = [2, 3, 4, 5];

function squaresMap(arr) {
  return arr.map(function (element) {
    return element ** 2;
  });
}

console.log(squaresMap(arr)); //output : [ 4, 9, 16, 25 ]