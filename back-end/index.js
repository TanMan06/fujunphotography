const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Database connection
const connection = mysql.createConnection({
    host: '3.18.221.147', // Use 'localhost' if on the same EC2 instance
    user: 'TanMan06',
    password: 'William!234',
    database: 'ContactFormDB'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
});

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    const query = 'INSERT INTO ContactForm (Name, Email, Message) VALUES (?, ?, ?)';
    connection.query(query, [name, email, message], (error, results) => {
        if (error) {
            res.status(500).send({ error: 'Error storing data' });
        } else {
            res.status(200).send({ message: 'Data stored successfully' });
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});