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
    


});


