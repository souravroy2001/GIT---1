/*

3. Given an array of numbers, use reduce() to calculate the sum of all elements. Input: [5, 10, 15, 20] 

Expected Output: 50

*/

let arr = [5, 10, 15, 20]; 

function sumReduce(arr){
    return arr.reduce((a,b) => {
       return a + b
    })
}

console.log(sumReduce(arr)) // output : 50