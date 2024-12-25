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

    // Validates that the book has all required fields.

     if (!book.isbn || !book.title || !book.author || !book.publicationYear) {
       throw new Error(
         "All fields (ISBN, title, author, publicationYear) are required"
       );
     }

    // Checks if the book with the same ISBN already exists in the library.

    if (this.books.some((b) => b.isbn === book.isbn)) {
    throw new Error("The same ISBN number book is already present");
    }


    // Validates that the ISBN length is exactly 10.
     if (book.isbn.toString().length !=10) {
       throw new Error("The ISBN number length should be exactly 10");
     }

    //  Validates that the publication year is in the past.
     const currentYear = new Date().getFullYear();
     if (book.publicationYear > currentYear) {
       throw new Error("Write the valid publication year in the past");
     }


    this.books.push(book);
  }
}


module.exports=Library;
