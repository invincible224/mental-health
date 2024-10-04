const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mhuser',
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Register endpoint
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, hashedPassword], (err, result) => {
        if (err) return res.status(500).send('Error on server.');
        res.status(201).send('User  successfully registered.');
    });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], (err, results) => {
        if (err) return res.status(500).send('Error on server.');
        if (!results.length || !bcrypt.compareSync(password, results[0].password)) {
            return res.status(401).send('Invalid credentials.');
        }
        res.status(200).send('Login successful.');
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
