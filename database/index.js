const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'publicip', 
    user: 'username',
    password: 'password',
    database: 'ContactFormDB'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});

