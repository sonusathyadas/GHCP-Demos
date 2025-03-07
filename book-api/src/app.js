const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const database = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/books', bookRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Initialize the database
//database.initialize();