// In this kata you will create a function that takes a list of 
// non-negative integers and strings and returns a new list with 
// the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// The more I use arrow functions the more I love them. I need to get
// to a place where arrow functions are second nature when I pseudo code.
// Here I used the filter method to pick out only the "typeof" 'number'


// My solution:
function filter_list(l) {
    return l.filter(v => typeof v == "number")
   }