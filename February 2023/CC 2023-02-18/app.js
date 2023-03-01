// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// This was a fun one on a saturday morning. Started with using Math.abs but then realized that
// .abs will switch the negative to positives, which would then add to the array total. 
// Using Math.abs the numbers are all being added, but I needed to turn the negative numbers
//  to 0 so it would'nt change the total. 
// Enter Math.max, which returns the largest of numbers given as an input parameter.
// In this case the parameter is (0, x); meaning anything below 0 will return 0 and 
// anything above 0 will return it's value. So now I have a new array with 0's and positive
// integers. 
// Next, how to add all the numbers in the array together. Let's use reduce()!
// This is one of the first times i've used reduce, so im going to over explain it.
// The reduce() parameters are as follows. reduce((accumulator, currentValue))
// we set the initialValue to 0 so the accumulator starts at 0 on its first call.
// Then we make a function adding both the accumulator and currentValue together and specify 
//  our initialValue . 
// I've named out accumulator (a) and our currentValue (b) and used arrow functions for 
// simplicity. 


// My Solution: 

function positiveSum(arr) {
    let imPositive = arr.map(x => Math.max(0, x))
    return imPositive.reduce((a,b) => a + b, 0)
  }