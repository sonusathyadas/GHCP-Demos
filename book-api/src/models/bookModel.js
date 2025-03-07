const sqlite3 = require('sqlite3').verbose();
const db = require('../database');

class Book {
    constructor(id, title, author, publishedYear, category, language) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.category = category;
        this.language = language;
    }

    static createTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS books (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                author TEXT NOT NULL,
                publishedYear INTEGER NOT NULL,
                category TEXT NOT NULL,
                language TEXT NOT NULL
            )
        `;
        db.run(sql);
    }

    static getAllBooks(callback) {
        db.all('SELECT * FROM books', [], (err, rows) => {
            callback(err, rows);
        });
    }

    static getBookById(id, callback) {
        db.get('SELECT * FROM books WHERE id = ?', [id], (err, row) => {
            callback(err, row);
        });
    }

    static createBook(book, callback) {
        const sql = 'INSERT INTO books (title, author, publishedYear, category, language) VALUES (?, ?, ?, ?, ?)';
        db.run(sql, [book.title, book.author, book.publishedYear, book.category, book.language], function(err) {
            callback(err, { id: this.lastID, ...book });
        });
    }

    static updateBook(id, book, callback) {
        const sql = 'UPDATE books SET title = ?, author = ?, publishedYear = ?, category = ?, language = ? WHERE id = ?';
        db.run(sql, [book.title, book.author, book.publishedYear, book.category, book.language, id], function(err) {
            callback(err, { id, ...book });
        });
    }

    static deleteBook(id, callback) {
        const sql = 'DELETE FROM books WHERE id = ?';
        db.run(sql, id, function(err) {
            callback(err, { id });
        });
    }

    // Method to get the list of books based on the category
    
}

module.exports = Book;