// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// To Do this I took the string => and put it into a variable
//  that broke it into an array (".split()") => put it into
//  a new array using (".map()") with the parameters of returning
//  the numbered length of each string in the array ("s.length") =>
// Finally, I used ("Math.min()") to return the smallest string in the array.

// My solution:

function findShort(s){
    let stringLength = s.split(' ').map(s => s.length)
    return Math.min(...stringLength)
  }
  