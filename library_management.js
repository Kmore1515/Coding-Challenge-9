// Task 1: Create a Book Class
class Book {
    constructor(title, author, ISBN) { // constructor that accepts a title, author, and an ISBN
        this.title = title;
        this.author = author;
        this.ISBN = ISBN; }
    _isAvailable = true
        getDetails() { // Returns the title, author, and ISBN
            return `Book Details: Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }
        get isAvailable() { // Getter to grab the availability
        return this._isAvailable;
    }
        set  isAvailable(availability) { // Setter to change the availability if needed
        this._isAvailable = availability;
    }
}

// Task 2: Create a Section Class
class Section {
    constructor(name) {
    this.name = name;
    this.books = []; // Open array to accept things being pushed inside
    }
        addBook(book) {
            this.books.push(book); // Adds a new book to the selection
    }   
        listBooks() {
            return this.books.map(book => ({
                title: book.title, // Lists what books are in the database
                isAvailable: book.isAvailable
            }));
        }
        getAvailableBooks() {
            return this.books.filter(book => book.isAvailable).length;
        } // Task 5: Handle Books Borrowing and Returning
        calculateTotalBooksAvailable() {
            return this.books.reduce((count, book) => {
                return book.isAvailable ? count +1 : count; // This makes sure the count is adding +1 when a book is returned.
            }, 0);
        }
    }

// Task 3: Create a Patron Class
class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = []; // This is an open array so that things can be pushed into it.
    }
        borrowBooks(book) {
            this.borrowedBooks.push(book); // Pushes a book into borrowed status and returns a message saying by who and what book.
            return `${book.title} is borrowed by ${this.name}`
        }
        returnBook(book) {
            book.isAvailable = true; // Makes the book available again
            this.borrowedBooks = this.borrowedBooks.filter(book => book !== book); // Puts book back into array while sending a message saying who returned what book,
            return `${book.title} returned by ${this.name}`
        }
}

// Task 4: Create a VIPPatron Class that Inherits from Patron
class VIPPatron extends Patron { // Takes the Patron class as a parent class
    constructor(name) {
        super(name)
        this.priority = true // Makes the VIP a priority
    }
    borrowBooks(book) {
        book.isAvailable = false; // Takes the book out of availability
        this.borrowedBooks.push(book); // Pushes book into borrowed and returns a messageing saying who borrowed what book
        return `${book.title} borrowed by VIP ${this.name}`
    }
}

// Task 6: Create and Manage Sections and Patrons
const romance = new Section("Romance"); // Create sections
const history = new Section("History");

const book1 = new Book("Love", "Kyle Morris", "1234567890"); // Create books
const book2 = new Book("World War 2", "John Doe", "2345678901")
const book3 = new Book("Exploration of North America", "Jane Doe", "3456789012")

romance.addBook(book1); // Add books to sections
history.addBook(book2);
history.addBook(book3);

regularPatron = new Patron("Nicolas Santiago"); // Create patrons
vipPatron = new VIPPatron("Giovanni Palencia", true)

regularPatron.borrowBooks(book1); // regular patron tries to get book but VIP as priority
vipPatron.borrowBooks(book1);

regularPatron.returnBook(book1); // Returns book.

romance.listBooks() // List books and availability

console.log(`Total available books in Romance: ${romance.getAvailableBooks()}`);
console.log(`Total available books in History: ${history.getAvailableBooks()}`)



