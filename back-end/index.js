const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');


app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'DATABSE IP', 
    user: 'USER',
    password: 'PASSWORD',
    database: 'ContactFormDB'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.', err);
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
    const newData = { Name: name, Email: email, Message: message };
    sendEmail(newData);
    
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'YOURGMAIL',
        pass: 'YOURPASSWORD' 
    }
});

function sendEmail(newData) {
    let mailOptions = {
        from: '"Your App" <YOURGMAIL>',
        to: 'EMAIL TO XYZ',
        subject: 'New Contact',
        text: `Submission: ${JSON.stringify(newData)}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error('Error sending email:', error);
        }
        console.log('Email sent: %s', info.messageId);
    });
}
