// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.
// Example:
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. 
// Do not mutate the input array/list.


// I did this using the map method, which creates a new array
// and multiplies each number by -1. This doesn't mutate the original array.

function invert(array) {
    return array.map(num => num * -1);
  }