const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('../models/School');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../schoolImages'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

router.post('/addSchool', upload.single('image'), (req, res) => {
    const { name, address, city, state, contact, email_id } = req.body;
    const image = req.file ? req.file.filename : '';

    const sql = 'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, address, city, state, contact, image, email_id], (err, result) => {
        if (err) throw err;
        res.send('School data added...');
    });
});

router.get('/schools', (req, res) => {
    const sql = 'SELECT * FROM schools';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

module.exports = router;
