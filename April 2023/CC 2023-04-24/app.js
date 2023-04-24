// Ahoy matey!

// You are a leader of a small pirate crew. And you have a plan.
// With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!
// Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?

// You begin with writing a generic Ship class / struct:

// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }

// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:
// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// var titanic = new Ship(15, 10);

// Task
// You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.
// Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!
// Add the method
// isWorthIt
// to decide if the ship is worthy to loot. For example:

// titanic.isWorthIt() // return false
// Good luck and may you find GOOOLD!

// Solution: 

// Here we are adding to the constructor function, so that whenever we create
// a new Ship object and pass in the draft and crew arguments the .isWorthIt
// function will calculate if the "weight" of the ship is worth looting. 

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function() {
     let minusCrew = this.draft - (this.crew * 1.5)
     return minusCrew > 20
   }
   
   }


// Here is another OOP question: 

// You are tasked with creating a program to manage a library's 
// collection of books. Each book has a title, author, publication year, 
// genre, and isAvailable property.

// Create a Book class with the following properties and methods:

// title: a string representing the title of the book
// author: a string representing the author of the book
// publicationYear: a number representing the year the book was published
// genre: a string representing the genre of the book
// isAvailable: a boolean representing whether the book is available to 
// borrow or not (initialized to true by default)

// borrow(): a method that sets the isAvailable property of the book to 
// false if the book is available to borrow, and returns true.
//  If the book is not available to borrow, it returns false.

//  return(): a method that sets the isAvailable property of the book 
//  to true if the book is currently not available, and returns true. 
//  If the book is already available, it returns false.
// Create a Library class with the following properties and methods:

// books: an array representing the collection of books in the library
// addBook(book): a method that adds a new book to the books array

// getAvailableBooks(): a method that returns an array of all available 
// books in the library

// getUnavailableBooks(): a method that returns an array of all unavailable 
// books in the library
// You can assume that each book has a unique title.

// Solution:


function Book(title, author, publicationYear, genre, isAvailable) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genre = genre;
    this.isAvailable = true;
    this.borrow = function() {
        if (this.isAvailable === true) {
            this.isAvailable = false;
            return true;
        } else {
            return false;
        }
    }
    this.return = function() {
        if (this.isAvailable === false) {
            this.isAvailable = true;
            return true;
        } else {
            return false;
        }
    }
}

function Library() {
    this.books = [];
    this.addBook = function(book) {
        this.books.push(book)
    }
        this.getAvailableBooks = function() {
            return this.books.filter(book => book.isAvailable === true)
        }
        this.getUnavailableBooks = function() {
            return this.books.filter(book => book.isAvailable === false)
        }
    }

const hobbit = new Book(
        'Hobbit',
        'JRR',
         1937,
        'fantasy',
         true
    )

const library = new Library();

library.addBook(hobbit)

console.log(library.getUnavailableBooks());