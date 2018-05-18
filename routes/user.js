const express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
var db = require('../models/dbconnection');

router.use(bodyParser.urlencoded({extended: false}));

const corsm = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
};

router.get("/", function (req, res) {
    db.query('SELECT * FROM users', function (err, rows, fields) {
        res.json(rows);
    });
});

router.get("/:id", function (req, res) {
    db.query('SELECT * FROM users WHERE id = ?', [req.params.id], function (err, rows, fields) {
        res.json(rows);
    });
});

router.post("/create", function (req, res) {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;

    const queryString = "INSERT INTO users (first_name, last_name) VALUES (?, ?)";
    db.query(queryString, [firstName, lastName], function (err, results, fields) {
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