//  Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

//  Examples (input -> output)
//  6, "I"     -> "IIIIII"
//  5, "Hello" -> "HelloHelloHelloHelloHello"

// Here is my answer
function repeatStr (n, s) {
    if (n > 0){   //(n > 0) => true, any positive number should return the if argument.
      return s.repeat(n); // Return the String Repeated (n) times. Ex. If n = 2 then multiply the string * 2.
    } else {
      return ''; //else return null, this is unnecessary for the question asked. But this would
    }                        //be a good place to create an argument in the event 'n' equaled a negative number
}  
  

// Here is a better version
function repeatStr (n, s) {
    return s.repeat(n);
  }