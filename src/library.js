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
  addBook(book) {
    this.validateBook(book);
    this.checkDuplicateISBN(book);
    this.validateISBNLength(book);
    this.validatePublicationYear(book);

    this.books.push(book);
  }

  // borrow available book from library
  borrowBook(isbn) {
    // check if book is added as per isbn
    const book = this.books.find((b) => b.isbn === isbn);

    this.checkBookIsAvailableInTheLibrary(book);

    this.checkBookIsBorrowedOrNot(book);

    book.isBorrowed = true;
    return "Book borrowed successfully";
  }

  // return borrowed book
  returnBook(isbn) {
    const book = this.books.find((b) => b.isbn === isbn);

    this.checkBookIsAvailableInTheLibrary(book);

    // check if book is not borrowed

    if (!book.isBorrowed) {
      throw new Error("Book was not borrowed");
    }

    book.isBorrowed = false;

    return `Book is return Successfully`;
  }

  // show available books (wich are not borrowed)

  showAvailableBooks(){

    // filter all the available books
    const availableBooks=this.books.filter((b)=>!b.isBorrowed);
    return availableBooks;
  }

  //checking if book is available in library

  checkBookIsAvailableInTheLibrary(book) {
    if (!book) {
      throw new Error("Book not found");
    }
  }

  //check if book is already borrowed
  checkBookIsBorrowedOrNot(book) {
    if (book.isBorrowed) {
      throw new Error(`Book is already borrowed`);
    }
  }
  // Validates that the book has all required fields.

  validateBook(book) {
    if (!book.isbn || !book.title || !book.author || !book.publicationYear) {
      throw new Error(
        "All fields (ISBN, title, author, publicationYear) are required"
      );
    }
  }

  // Checks if the book with the same ISBN already exists in the library.

  checkDuplicateISBN(book) {
    if (this.books.some((b) => b.isbn === book.isbn)) {
      throw new Error("The same ISBN number book is already present");
    }
  }

  // Validates that the ISBN length is exactly 10.
  validateISBNLength(book) {
    if (book.isbn.toString().length != 10) {
      throw new Error("The ISBN number length should be exactly 10");
    }
  }

  //  Validates that the publication year is in the past.
  validatePublicationYear(book) {
    const currentYear = new Date().getFullYear();
    if (book.publicationYear > currentYear) {
      throw new Error("Write the valid publication year in the past");
    }
  }
}


module.exports=Library;
