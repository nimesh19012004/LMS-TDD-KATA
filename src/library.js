/**
 * Represents a library management system.
 * features like adding, borrowing, returning, and viewing books.
 */

class Library {
  // Initializes an empty array to store books.

  constructor() {
    this.books = [];
  }

  // Adds a new book to the library
  addBook(book){

    this.books.push(book);
  }
}


module.exports=Library;
