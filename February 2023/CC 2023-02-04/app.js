// Given an integer or a floating-point number, find its opposite.
// Example: If you have 1 the opposite should be -1, 200 should return -200.
// This one was simple, however it was a test in thinking simple to solve the problem.
// This solution would work for both positive and negative numbers. [-1 * 1 = -1 & -1 * -1 = 1]


//This was my solution, I prefer this due to it being slightly more understandable.
function opposite(number) {
    return number * -1
}

//This would be the more streamlined answer. 
function opposite(number) {
    return (-number)
}