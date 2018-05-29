var bCrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
var models = require("../models");
var User = models.user;
var jwtOptions = {};
jwtOptions.secretOrKey = 'tasmanianDevil';

var exports = module.exports = {};

exports.signin = function (req, res) {
    if (req.body.email && req.body.password) {
        var email = req.body.email;
        var password = req.body.password;
    }
    var isValidPassword = function (userpass, password) {
        return bCrypt.compareSync(password, userpass);
    };
    User.findOne({
        where: {
            email: email
        }
    }).then(function (user) {
        if (!user) {
            res.status(401).json({message: "Email does not exist"});
        }
        if (!isValidPassword(user.password, password)) {
            res.status(401).json({message: "passwords did not match"});
        }
        var payload = {id: user.id};
        var token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({
            message: "ok",
            token: token
        });
    }).catch(function (err) {
        console.log("Error:", err);
        res.status(401).json({message: "Something went wrong with your Signin"});
    });
};

exports.createUser = function (req, res) {

};