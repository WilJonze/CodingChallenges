// Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. 
// You don't have to worry with strings with less than two characters.


// My solution: Slice seems to be a little weird in that it looks like it starts
// at a index of 1 and not 0. I'm sure i'll get a good definition on why. 

function removeChar(str){
    return str.slice(1, str.length - 1); // I dont have to specify the str.length but it makes more sense to me this way
  };
  