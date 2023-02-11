// In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?

// Examples:
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Notes:
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


// My Solution: I know there is a better solution for solving this.
// but this was a way I knew for sure. 

function makeNegative(num) {
    if (num === 0) {
      return 0
    } else if (num < 0) {
      return num
    } else {
      return num * -1
    }
  }

// Enter Math.abs(). This method returns the absolute value of a number
// absolute value removes any negative sign in front of a number and
// thinks of every number as either positive or zero. 
// 
// But I need the none zero numbers to be negative? Well, what if 
// I returned -Math.abs()?, making negative the absolute positive.
// some times math logic is like a game of uno. That is to say reversing
// something thats already been reversed. 

// Here is a better solution:

function makeNegative(num) {
    return -Math.abs(num);
  }

// You could also use a ternary operator. 

function makeNegative(num) {
    return num < 0 ? num : -num;
  }