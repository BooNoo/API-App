var models = require("../models");
var LocationType = models.locationType;

var exports = module.exports = {};

exports.create = function (req, res) {
    var data = {
        name: req.body.name
    };
    LocationType.create(data).then(function (location, created) {
        if (!location) {
            res.json({error: true, message: "Error in location type create"})
        }
        if (location) {
            res.json({error: false, message: "Location type created"})
        }
    });
};

exports.all = function (req, res) {
    LocationType.findAll().then(function (locations) {
        res.json(locations)
    })
};

exports.byId = function (req, res) {
    LocationType.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (location) {
        if (!location) {
            res.json({error: true, message: "Location type not found"})
        } else {
            res.json(location)
        }

    })
};

exports.updateById = function (req, res) {
    var data = {
        name: req.body.name
    };
    LocationType.update(data,{
        where: {
            id: req.params.id
        }
    }).then(function (location) {
        if (!location) {
            res.json({error: true, message: "Location type not found"})
        } else {
            res.json({error: false, message: "Location type updated"})
        }
    })
};

exports.deleteById = function (req, res) {
    LocationType.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (value) {
        if (!value) {
            res.json({error: true, message: "Error while delete location type"})
        } else {
            res.json({error: false, message: "Success delete location type"})
        }
    })
};