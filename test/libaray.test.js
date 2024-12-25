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
              452367,
              "Rich Dad Poor Dad",
              "Robert Kiyosaki",
              1997
            );

          library.addBook(book1);
          expect(library.books).toContain(book1);
        })


        


        test(
          `should not add book(Throw error) any missing field(isbn,title,author,publicationYear)`,()=>{

            let book1 = new Book(
              452367,
              "",
              "Robert Kiyosaki",
              1997
            );

            expect(() => library.addBook(book1)).toThrow(
              `should not add book(Throw error) any missing field(isbn,title,author,publicationYear)`
            );


          }
        );
    })

});


