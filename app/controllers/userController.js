var bCrypt = require('bcrypt-nodejs');
var models = require("../models");
var User = models.user;

var exports = module.exports = {};

exports.all = function (req, res) {
    User.findAll().then(function (users) {
        res.json(users)
    })
};

exports.create = function (req,res) {
    var generateHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
    };
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(function (user) {
        if (user) {
            res.json({error: true, message: "This email is already taken"})
        } else {
            var userPassword = generateHash(req.body.password);

            var data = {
                email: req.body.email,
                password: userPassword,
                role: req.body.role
            };
            User.create(data).then(function (newUser, created) {
                if (!newUser) {
                    res.json({error: true, message: "Error in user create"})
                }
                if (newUser) {
                    res.json({error: false, message: "User created"})
                }
            });
        }
    });
};