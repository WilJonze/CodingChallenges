// Consider an array/list of sheep where some sheep may be missing 
// from their place. We need a function that counts the 
// number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// I thought to hard about this one. The best part of doing these on
// Code Wars is seeing how others have solved it and realizing I over engineered it.

// Here is my Solution in RegExp:
function countSheeps(arrayOfSheep) {
    let string = arrayOfSheep.toString();
    let accounted = (string.match(/true/g) || []).length
    return accounted
  }

// Here is the more accurate Solution:

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }