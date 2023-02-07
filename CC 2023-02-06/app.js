// Create a function that returns the sum of the two lowest positive numbers 
// given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.



// Breaking down my solution: I certainly need a little help with this one.
// Math.min(...numbers) is finding the smallest number in the array a puts it into a variable
// Then .splice removes the value of the the "first" variable (which in this case is the smallest number)
// leaving way for me to repeat the process with the "second" variable, now the second smallest is the smallest.
// Then just add the two. 


function sumTwoSmallestNumbers(numbers) {  
  
    let first = Math.min(...numbers);
   numbers.splice(numbers.indexOf(first),1);
    let second = Math.min(...numbers);
      
     return first + second;
 };