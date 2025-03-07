const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Initialize the SQLite database connection
const db = new sqlite3.Database(path.join(__dirname, 'books.db'), (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Create the books table if it doesn't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        publishedYear INTEGER NOT NULL,
        category TEXT NOT NULL,
        language TEXT NOT NULL
    )`, (err) => {
        if (err) {
            console.error('Error creating table ' + err.message);
        }
    });
});

// Export the database connection
module.exports = db;