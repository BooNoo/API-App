const express = require('express');
var router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'werTT75&',
    database: 'testmysql'
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('Database connected!');
});

router.get("/", function (req, res) {
    connection.query('SELECT * FROM users', function (err, rows, fields) {
        res.json(rows);
    });
});

router.get("/:id", function (req, res) {
    connection.query('SELECT * FROM users WHERE id = ?',[req.params.id], function (err, rows, fields) {
        res.json(rows);
    });
});

module.exports = router;