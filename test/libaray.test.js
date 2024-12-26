// Import the necessary classes 


const Library=require("../src/library");
const Book=require("../src/book");



// Top-level describe block for the Library Management System tests

describe(`Library Mangement System`, () => {
    let library;


    // Initialize a new Library instance before each test 

    beforeEach(()=>{
        library=new Library();
    })

    test('should initilize a library with an empty books array', () => {
      expect(library.books).toEqual([]);
    })
    


    describe(`test case for add book`,()=>{


        test(`should add book and return added book`,()=>{
            let book1 = new Book(
              4523674567,
              "Rich Dad Poor Dad",
              "Robert Kiyosaki",
              1997
            );

          library.addBook(book1);
          expect(library.books).toContain(book1);
        })


        


        test(
          `should not add book(Throw error) any missing field(isbn,title,author,publicationYear)`,()=>{

            let book1 = new Book(4523674567, "", "Robert Kiyosaki", 1997);

            expect(() => library.addBook(book1)).toThrow(
              `All fields (ISBN, title, author, publicationYear) are required`
            );


          }
        );

        test("should not add a book with an duplicate ISBN which is already present", () => {
          let book1 = new Book(
            4523674567,
            "Rich Dad Poor Dad",
            "Robert Kiyosaki",
            1997
          );
          library.addBook(book1);
          expect(() => library.addBook(book1)).toThrow(
            "The same ISBN number book is already present"
          );
        });


        test("should not add a book if ISBN number length is not 10", () => {
          let book1 = new Book(
            452367,
            "Rich Dad Poor Dad",
            "Robert Kiyosaki",
            1997
          );
          expect(() => library.addBook(book1)).toThrow(
            "The ISBN number length should be exactly 10"
          );
        });


        test("should not enter the invalid publicationYear in the past", () => {
          let book1 = new Book(
            4523674567,
            "Rich Dad Poor Dad",
            "Robert Kiyosaki",
            2080
          );
          expect(() => library.addBook(book1)).toThrow(
            "Write the valid publication year in the past"
          );
        });

        

    })


    // Nested describe block for testing book borrowing

    describe(`test case fot borrow book`,()=>{

     test(`should not borrow book if it's not added to the library`,()=>{
      expect(() => library.borrowBook(4523674567)).toThrow('Book not found');
     })


     test(`should not borrowed book if it's not available`,()=>{
        const book1 = new Book(
          4523674567,
          "Rich Dad Poor Dad",
          "Robert Kiyosaki",
          1997
        );
        library.addBook(book1);
        library.borrowBook(4523674567);
        expect(() => library.borrowBook(4523674567)).toThrow('Book is already borrowed');
     })


     test(`should borrow if it's available`,()=>{
      const book1 = new Book(
          4523674567,
          "Rich Dad Poor Dad",
          "Robert Kiyosaki",
          1997
        );
        library.addBook(book1);
      expect(library.borrowBook(4523674567)).toBe("Book borrowed successfully");
     })



    })



    // testing book return

    describe(`test cases for return book`, () => {
      

       test("should not return book if it's not available in the library", () => {
         expect(() => library.returnBook(4523674567)).toThrow("Book not found");
       });

       test("should not return book if it's not borrowed", () => {
         let book1 = new Book(
           4523674567,
           "Rich Dad Poor Dad",
           "Robert Kiyosaki",
           1997
         );
         library.addBook(book1);
         expect(() => library.returnBook(book1.isbn)).toThrow(
           "Book was not borrowed"
         );
       });


       test(`should return book if it's borrowed`, () => {
        let book1 = new Book(
          4523674567,
          "Rich Dad Poor Dad",
          "Robert Kiyosaki",
          1997
        );
        library.addBook(book1);
        library.borrowBook(4523674567);
        expect(library.returnBook(4523674567)).toBe('Book is return Successfully');
       
       });
    });


    // testing view book

    describe(`test case for view available book`, () => {
      

       test(`should show no available books when all are borrowed`, () => {
         const book1 = new Book(
           4523674567,
           "Rich Dad Poor Dad",
           "Robert Kiyosaki",
           1997
         );

         const book2 = new Book(
           4523677567,
           "OBJECT ORIENTED PROGRAMMING",
           "Dr. Manmohan Singh",
           2022
         );
         library.addBook(book1);
         library.addBook(book2);
         library.borrowBook(4523674567);
         library.borrowBook(4523677567);

         const availableBooks = library.showAvailableBooks();
         expect(availableBooks.length).toBe(0);
       });
    });




});


