// Complete the method that takes a boolean value and return 
// a "Yes" string for true, or a "No" string for false.

// simple enough challenge however I totally for forgot about 
// the ternary operator "?". If/else statements make so much since to 
// that I feel obligated to use them where every I can.

// My solution:

function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

  // Solution after refactoring:
  function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }