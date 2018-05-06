const express = require('express');
var router = express.Router();
const mysql = require('mysql');
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended: false}));

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'werTT75&',
    database: 'users_test'
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
    connection.query('SELECT * FROM users WHERE id = ?', [req.params.id], function (err, rows, fields) {
        res.json(rows);
    });
});

router.post("/create", function (req, res) {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;

    const queryString = "INSERT INTO users (first_name, last_name) VALUES (?, ?)";
    connection.query(queryString, [firstName, lastName], function (err, results, fields) {
        if (err) {
            console.log("Failed insert user" + err);
            res.sendStatus(500);
            return
        }
        console.log("insert a new user with id:", results.insertId);
        res.end();
    });
});

module.exports = router;