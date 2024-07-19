// server/models/School.js
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12720888', // replace with your MySQL username
    password: 'MN7UjWuj2Q', // replace with your MySQL password
    database: 'sql12720888'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

module.exports = db;
