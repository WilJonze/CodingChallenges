// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


// This one was fun, because I immediately knew that a for loop would solve this problem,
// but I wanted to try and think of another way to do it. However, I had to remind myself
// of 'recursion' (which I dont totally have a grasp of, honestly). 
// SO to prove to myself I knew at least one way of doing it. I tried the following.

let summation = function (num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
  }

// Admittedly I had to play around with the loops condition from ("from num.length to num")
// but I felt comfortable completing the challenge this way. 
// Here is the problem solved with recursion. 

let summation = function (num) {
    return num ? num + summation(num - 1) : num
}

// This function sort of works in reverse of the for loop. 
// First it asks is 'num truthy? if yes move on to step 2.
// Its going to start at the last number and count down until it gets to a falsy value ('0').
// Then it adds up all the numbers it counted. Starting at 0. 
// I was a little unsure of how recursion totally works, so I looked it up and the shortest
// video I found was 2hr long. Uhhhh... I got some more work to do.