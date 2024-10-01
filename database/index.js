const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'your-ec2-public-ip', // EC2 instance public IP
    user: 'yourusername',
    password: 'yourpassword',
    database: 'ContactFormDB'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});