//DESCRIPTION:
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Examples
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"



//This was my solution

function reverseWords(str) {
    let splitString = str.split(' ');
    
    let newString = splitString.map(word => word.split('').reverse().join(''))
    
    return newString.join(' ')
    
  }

  
//This is most streamlined 

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }


// I think this looks the best

function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

