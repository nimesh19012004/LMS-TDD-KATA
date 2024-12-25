/**
 * Represents a book in the library system.
 * Encapsulates the details of a book, including its ISBN, title, author, publication year,
 * and its current borrowing status.
 */

class Book{
    constructor(isbn,title,author,publicationYear){
      this.isbn = isbn; // Unique identifier for the book.
      this.title = title; // Title of the book.
      this.author = author; // Name of the book's author.
      this.publicationYear = publicationYear; // Year the book was published.
      this.isBorrowed = false; // Indicates if the book is currently borrowed.
    }
}

module.exports=Book;