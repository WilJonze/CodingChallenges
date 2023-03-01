// Your task is to make a function that can take any non-negative
// integer as an argument and return it with its digits in descending 
// order. Essentially, rearrange the digits to create the highest 
// possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// This problem was a reminder that methods like .split and .join 
// only work with strings. Also notice the .sort arguments "(a,b) => b-a",
// a-b would sort things in ascending order while b-a sorts in descending order.

// My Solution: 
function descendingOrder(...n){
    let splitIt = n.toString().split('')
    let sorted = splitIt.sort((a,b) => b-a).join('')
    return Math.abs(sorted)
     }

// Here is a one line Solution using parse to change the array into strings.
// Solution: 
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }