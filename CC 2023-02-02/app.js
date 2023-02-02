// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//I need to go through array 'a' and check to see if there is any value of 'x'
// at first I thought that a loop would be work here something like
// 
// function check(a,x){
//   var result = false;
//   for(i = 0; i < a.length; i++){
// if(a[i]==x){
// result  = true;
// }  
//   }
//   return result;
// Then I learned about the ".includes()" method that does exactly what this question is asking


// My answer (still obsessed with if/else statements)
function check(a, x) {
    if (a.includes(x)) {
      return true
    } else {
     return false
    }
  }

// A better more streamlined answer
  function check(a,x){
    return a.includes(x);
  };