// server/models/School.js
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // replace with your MySQL username
    password: '', // replace with your MySQL password
    database: 'mydb'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

module.exports = db;
