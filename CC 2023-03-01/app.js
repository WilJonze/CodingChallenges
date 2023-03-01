// Given an integer x, return true if x is a 
// palindrome, and false otherwise.

//  Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Remembering that we must turn our number into a string before we can use the 
// .split method. In essence, I took the string number and compared it to a reversed
// version of that string. If there were the same then it returned true!
// We could have also created a for loop that compared the numbers to see if first
// was equal to last. 

// Solution: 
var isPalindrome = function(x) {
    let pali = x.toString()
    return pali == pali.split('').reverse().join('');
      
  };