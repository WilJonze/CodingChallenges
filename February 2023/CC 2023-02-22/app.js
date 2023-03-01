// Recently I completed a "Rock,Paper,Scissors" challenge. In the markdown,
// I talked about how I heard that the challenge had been used as a interview
// question. SO today I wanted to complete another common interview question.
// Fizzbuzz. With the goal of completing it and refactoring it in a couple
// of different ways. 

//Solution in its simplest form. 

function fizzBuzz(n){
    for(let i=0; i <= n.length; i++){
        if(i % 5 === 0 && i % 3 === 0){
          console.log("FizzBuzz")
        }   
        else if(i % 3 === 0){
          console.log("Fizz")
        }
        else if(i % 5 === 0){
          console.log("Buzz")
        }
        else {
          console.log(i)
        }
    }
}

// Solution that puts the numbers in a array for display.

function fizzbuzz(n) {
	var fizzified = [];
  for (var i = 1; i <= n; i++) {
    var val = '';
    if (i % 3 == 0) val += 'Fizz';
    if (i % 5 == 0) val += 'Buzz';
   	fizzified.push(val || i);
  }
  return fizzified;
}

function fizzify(n) {
	return fizzbuzz(n);
}

// Solution using .apply and .map. This one is by far the most confusing.
// And a refactored solution I needed to look up. 

var fizzify = fizzbuzz = function(n)
{
  return Array.apply(null, new Array(n)).map(function(e, i){
    return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
  }); 
}
