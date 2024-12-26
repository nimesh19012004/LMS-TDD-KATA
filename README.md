
# Library Management System (Incubyte Assessment)
This is a simple library management system entirely implemented using a Test Driven Development (TDD) approach. It allows users to perform basic operations such as adding books, borrowing books, returning borrowed books and viewing available books.


## Table of Content


- [Don't know about TDD?](#dont-know-about-tdd)
- [Features](#features)
- [Project Structure](#project-structure)
- [How to Setup the Project?](#how-to-setup-the-project)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the tests](#running-the-tests)
- [Test Coverage](#test-coverage)
- [Built with](#built-with)
- [Authors](#authors)


## Don't know about TDD?

[![A video on 3 laws of TDD](https://img.youtube.com/vi/qkblc5WRn-U/0.jpg)](https://www.youtube.com/watch?v=qkblc5WRn-U)

## Features

- **Add Book**: Add a new book to the library with a unique ISBN, title, author, and publication year.
- **Borrow Book**: Borrow a book from the library if it is available.
- **Return Book**: Return a borrowed book to the library.
- **View Available Books**: List all books that are currently available in the library.

## Project Structure
```
library-management-system
├── src/
│   ├── library.js        # Library class with all functionalities
│   └── book.js           # Book class representing a book entity
├── test/
│   └── library.test.js   # Test file for Library class
├── README.md             # Project documentation
├── package.json          # Node.js dependencies and scripts
├── package-lock.json     # Automatically generated, locks dependency versions
├── .gitignore            # Git ignore file specifying files and directories to ignore
```


## How to Setup the Project?

Follow the below steps to get started with the project running on your system. 

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Jest](https://jestjs.io/) for testing 

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/nimesh19012004/LMS-TDD-KATA.git
   ```

2. Navigate to the project directory:

   ```
   cd incubyte-assessment
   ```

3. Install the required packages:
   ```
   npm install
   ```

### Running the tests
   ``
   npm test
   ``

## Test Coverage

The following image shows the test coverage of the project. 
![test_coverage](https://github.com/nimesh19012004/LMS-TDD-KATA/blob/main/Test-Coverage.png?raw=true)

## Built With

- [Node.js](https://nodejs.org/) - The runtime used
- [Jest](https://jestjs.io/) - Testing framework

## Authors

- [@nimesh19012004](https://github.com/nimesh19012004)