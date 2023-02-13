// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

// Lets Go back to Math class! The basic equation for finding the 3rd angle is 180 minus the
// sum of 2 angles. So this problem could be solved as follows:

function otherAngle(a, b) {
    return 180 - (a+b)
  }

// BUT thats no fun. Remember that I learned the absolute Method a couple of Katas back.
// Which only gives back 0 and positive numbers. SO what if I reversed the equation so that
// sometimes the result is negative?

function otherAngle(a, b) {
    let cAngle = Math.abs((a + b) - 180);
    return cAngle;
  }