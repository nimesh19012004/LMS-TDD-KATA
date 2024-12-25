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

     if (!book.isbn || !book.title || !book.author || !book.publicationYear) {
       throw new Error(
         "All fields (ISBN, title, author, publicationYear) are required"
       );
     }

    this.books.push(book);
  }
}


module.exports=Library;
