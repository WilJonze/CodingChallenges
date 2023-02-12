// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


//Learned about Destructuring that I used to solve this problem. It is an assignment 
// that makes it possible to unpack values from array '([v])'. In this case its used to
// pull the first letter from each element in the array. Not a 100% on that concept, but I
// have used it in react when assign object values.
// A Quick walk-through of the process. Had a string => turned it into array '.split'
// made a new array '.map' => passed maps argument that extracted the first letter of each 
// element of the string. => returned the index of 0 and 1 in the array and Capitalized.
//(ex. 'john doe' => [john, doe] => [j, d] => 'J.D')

function abbrevName(name){
    let arrayName = name.split(" ");
    let sliceAndDice = arrayName.map(([v])=> v)
    return `${sliceAndDice[0].toUpperCase()}.${sliceAndDice[1].toUpperCase()}`
  }