// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// 
// In mathematics, Pascal's triangle is a triangular array of 
// the binomial coefficients that arises in probability theory, 
// combinatorics, and algebra.

//                 1
//             1       1
//         1       2       1
//     1       3       3       1
// 1       4       6       4       1

// In simpler terms, your adding the outside of the triangle to eventually
// fill in the inside of the triangle, as seen above. 
// With this I learned about a 2D array, which can be created by having 
// nested loops. Then using the iterations of both loops and adding them together.
// In all transparency, I had no clue how to do this problem. With the help of 
// stack overflow, Class Mentors, and Chat GPT. I was able to assemble a solution. 
// However, the result was creating a algorithm of O(n), with a 100% runtime 
// and a 89% in memory usage!

// Solution: 
var generate = function(numRows) {
    const result = [];

for (let i = 0; i < numRows; i++) {
  const row = [];

  for (let j = 0; j <= i; j++) {
    if (j === 0 || j === i) {
      row.push(1);
    } else {
      row.push(result[i-1][j-1] + result[i-1][j]);
    }
  }

  result.push(row);
}

return result;
}


42.5