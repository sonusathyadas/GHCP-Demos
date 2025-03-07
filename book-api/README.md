# Express REST API for Book Management

This project is a simple Express.js REST API application for managing a collection of books. It allows users to perform CRUD (Create, Read, Update, Delete) operations on book data stored in an SQLite database.

## Project Structure

```
express-rest-api
├── src
│   ├── controllers
│   │   └── bookController.js
│   ├── models
│   │   └── bookModel.js
│   ├── routes
│   │   └── bookRoutes.js
│   ├── app.js
│   └── database.js
├── package.json
├── .env
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-rest-api
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your database connection string:
   ```
   DATABASE_URL=your_database_url_here
   ```

## Usage

To start the application, run the following command:
```
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

### Create a Book
- **Endpoint:** `POST /api/books`
- **Request Body:**
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "publishedYear": 2021,
    "category": "Fiction",
    "language": "English"
  }
  ```

### Get All Books
- **Endpoint:** `GET /api/books`

### Get a Book by ID
- **Endpoint:** `GET /api/books/:id`

### Update a Book
- **Endpoint:** `PUT /api/books/:id`
- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author",
    "publishedYear": 2022,
    "category": "Non-Fiction",
    "language": "English"
  }
  ```

### Delete a Book
- **Endpoint:** `DELETE /api/books/:id`

## License

This project is licensed under the MIT License.