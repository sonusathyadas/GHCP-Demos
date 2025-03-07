class BookController {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }

    async createBook(req, res) {
        try {
            const bookData = req.body;
            this.bookModel.createBook(bookData, (err, newBook) => {
                if (err) {
                    res.status(500).json({ message: 'Error creating book', error: err });
                } else {
                    res.status(201).json(newBook);
                }
            });
        } catch (error) {
            res.status(500).json({ message: 'Error creating book', error });
        }
    }

    async getAllBooks(req, res) {
        try {
            this.bookModel.getAllBooks((err, books) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'Error retrieving books', error: err });
                } else {
                    res.status(200).json(books);
                }
            });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving books', error });
        }
    }

    async getBookById(req, res) {
        try {
            const { id } = req.params;
            this.bookModel.getBookById(id, (err, book) => {
                if (err) {
                    res.status(500).json({ message: 'Error retrieving book', error: err });
                } else if (book) {
                    res.status(200).json(book);
                } else {
                    res.status(404).json({ message: 'Book not found' });
                }
            });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving book', error });
        }
    }

    async updateBook(req, res) {
        try {
            const { id } = req.params;
            const updatedData = req.body;
            this.bookModel.updateBook(id, updatedData, (err, updatedBook) => {
                if (err) {
                    res.status(500).json({ message: 'Error updating book', error: err });
                } else if (updatedBook) {
                    res.status(200).json(updatedBook);
                } else {
                    res.status(404).json({ message: 'Book not found' });
                }
            });
        } catch (error) {
            res.status(500).json({ message: 'Error updating book', error });
        }
    }

    async deleteBook(req, res) {
        try {
            const { id } = req.params;
            this.bookModel.deleteBook(id, (err, deleted) => {
                if (err) {
                    res.status(500).json({ message: 'Error deleting book', error: err });
                } else if (deleted) {
                    res.status(204).send();
                } else {
                    res.status(404).json({ message: 'Book not found' });
                }
            });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting book', error });
        }
    }
}

module.exports = BookController;