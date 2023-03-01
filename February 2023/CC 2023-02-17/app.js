// Alex just got a new hula hoop, he loves it but feels discouraged 
// because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop 
// goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// This will be the last time i'll post something this simple on the topic of 
// if/else statements || ternary operators. This was great practice in solidifying those basics.

// My solution: 

function hoopCount(n) {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
  }

// About a month ago this would have been my solution: 
 
function hoopCount (n) {
    if (n >= 10) { 
        return("Great, now move on to tricks") 
    } else { 
        return("Keep at it until you get it") 
    }
}

// However, I do like the idea of throwing an error if the 
// input is left empty or a negative number.

function hoopCount (n) {
    let error = 'Invalid input';
    let congrats = 'Great, now move on to tricks';
    let encourage = 'Keep at it until you get it';
    if ( n <= 9 && n >= 0) {
      return encourage;
    } else if (times >= 10) {
      return congrats;
    } else {
    return error;
    }
 }

