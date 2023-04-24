
// FindIndex**
// Index the sheep!

function warnTheSheep(queue) {
    let wolfIndex = queue.findIndex((animal) => animal === "wolf") //findIndex returns the index of the first element in 
                                                                   // the array that satisfies the provided testing function. 
                                                                   // Otherwise, it returns -1, indicating that no element passed the test.
                                                                   // requires a callback function
    if (wolfIndex === queue.length -1) {
      return "Pls go away and stop eating my sheep"
    } else {
      let sheepIndex = queue.length - wolfIndex -1
      return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`
    }
}

// Another! Vowel 

let word = ""

function findFirstVowelIndex(word) {
    let vowels = ["a", "e", "i", "o", "u"]
    let wordArray = word.split("");
    let vowelIndex = wordArray.findIndex((letter) => vowels.includes(wordArray.toLowerCase()));
    return vowelIndex;
}

warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep", "sheep", "sheep"]);

// end of FindIndex**

// forEach**

function double(arr) {
    let result = [];
    arr.forEach((num) => result.push(num *2))
    return result;
}

console.log(double([1,2,3,4,5]))

console.log("Hello World")

// end of forEach**

// map**

function changeCase(arr) {
    return arr.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });
}