var models = require("../models");
var Location = models.location;

var exports = module.exports = {};

exports.create = function (req, res) {
    var data = {
        name: req.body.name,
        code: req.body.code,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    };
    Location.create(data).then(function (location, created) {
        if (!location) {
            res.json({error: true, message: "Error in location create"})
        }
        if (location) {
            res.json({error: false, message: "Location created"})
        }
    });
};

exports.all = function (req, res) {
    Location.findAll().then(function (locations) {
        res.json(locations)
    })
};

exports.byId = function (req, res) {
    Location.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (location) {
        if (!location) {
            res.json({error: true, message: "Locations not found"})
        } else {
            res.json(location)
        }

    })
};

exports.updateById = function (req, res) {
    var data = {
        name: req.body.name,
        code: req.body.code,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    };
    Location.update(data,{
        where: {
            id: req.params.id
        }
    }).then(function (location) {
        if (!location) {
            res.json({error: true, message: "Locations not found"})
        } else {
            res.json({error: false, message: "Locations updated"})
        }
    })
};

exports.deleteById = function (req, res) {
    Location.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (value) {
        if (!value) {
            res.json({error: true, message: "Error while delete location"})
        } else {
            res.json({error: false, message: "Success delete location"})
        }
    })
};
