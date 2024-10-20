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