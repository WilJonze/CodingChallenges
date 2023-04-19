// In this kata you are required to, given a string, replace every
//  letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

// The solution requires you to know the ASCII code for each letter which was 
// my main struggle. However, with some research I learned
//  about the .charCodeAt() method. A method that returns the 
// Unicode of the character at the specified index in a string.
// the characters start at 97, so I subtracted 96 to get the correct number.

// Solution:

function alphabetPosition(text) {
    let textLow = text.toLowerCase();
    let a = ""
    
    for (let i = 0; i < textLow.length; i++) {
            if (textLow.charCodeAt(i) - 96 > 0 && textLow.charCodeAt(i) - 96 <= 26) {
          a+= textLow.charCodeAt(i) - 96 + ' ';
        }
      }
      return a.trim();
    }
    