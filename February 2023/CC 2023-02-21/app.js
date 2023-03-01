// Rock Paper Scissors
// Let's play! You have to return which player won! 
// In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// There is most certainly a shorter way to do this, but I do think this 
// is the clearest way of doing it. I've heard that this is sometimes used
// as a interview question. SO I've added a few more solutions. 

// My Solution: 
const rps = (p1, p2) => {
    if (
      p1 == "scissors" && p2 =="paper" ||
      p1 == "paper" && p2 == "rock" ||
      p1 == "rock" && p2 == "scissors") {
      return "Player 1 won!"
    } else if (
      p1 == "paper" && p2 == "scissors" ||
      p1 == "scissors" && p2 == "rock" ||
      p1 == "rock" && p2 == "paper"){
      return "Player 2 won!"
    } else {
      return "Draw!"
    }
  };

// a shorter solution:
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };

// another: 
const rps = (p1, p2) => {
    if (p1 == p2)
      return 'Draw!';
      
     if (p1 == 'rock' && p2 == 'scissors') 
       return 'Player 1 won!'
     else if (p1 == 'scissors' && p2 == 'paper') 
       return 'Player 1 won!'
     else if (p1 == 'paper' && p2 == 'rock') 
       return 'Player 1 won!'
     else
       return 'Player 2 won!';
  };