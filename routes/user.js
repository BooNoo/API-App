const express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const mysql = require('mysql');

var connection = mysql.createPool({
    host: process.env.DATA_BASE == 'dev' ? 'localhost' : 'eu-cdbr-west-02.cleardb.net',
    user: process.env.DATA_BASE == 'dev' ? 'root' : 'b1750ef905d503',
    password: process.env.DATA_BASE == 'dev' ? 'werTT75&' : '30524845',
    database: process.env.DATA_BASE == 'dev' ? 'werTT75&' : 'heroku_9517f6a4faa8437'
});

router.use(bodyParser.urlencoded({extended: false}));

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