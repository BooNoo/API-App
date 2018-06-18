var models = require("../models");
var Object = models.object;
var ObjectImage = models.objectImage;
var Location = models.location;
var LocationType = models.locationType;


var exports = module.exports = {};

exports.create = function (req, res) {
    var data = {
        name: req.body.name,
        information: req.body.information,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        objectImages: req.body.objectImages,
        fk_typeid: req.body.fk_typeid,
        fk_locationid: req.body.fk_locationid
    };
    Object.create(data, {
        include: [ObjectImage]
    }).then(function (location, created) {
        if (!location) {
            res.json({
                error: true,
                message: "Error in object create"
            })
        }
        if (location) {
            res.json({
                error: false,
                message: "Object created"
            })
        }
    });
};

exports.getAll = function (req, res) {
    Object.findAll({
        // attributes: ['name'],
        include: [
            {
                model: ObjectImage
                // attributes: ['url'],
            },
            {
                model: Location
            },
            {
                model: LocationType
            }]
    }).then(function (companies) {
        res.send(companies)
    });
};

exports.getById = function (req, res) {
    Object.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: ObjectImage
                // attributes: ['url'],
            },
            {
                model: Location
            },
            {
                model: LocationType
            }]
    }).then(function (location) {
        if (!location) {
            res.json({
                error: true,
                message: "Object not found"
            })
        } else {
            res.json(location)
        }

    })
};

exports.updateById = function (req, res) {
    var data = {
        name: req.body.name,
        information: req.body.information,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        fk_typeid: req.body.fk_typeid,
        fk_locationid: req.body.fk_locationid
    };
    Object.update(data, {
        where: {
            id: req.params.id
        }
    }).then(function (location) {
        if (!location) {
            res.json({
                error: true,
                message: "Object not found"
            })
        } else {
            res.json({
                error: false,
                message: "Object updated"
            })
        }
    })
};

exports.deleteById = function (req, res) {
    Object.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (value) {
        if (!value) {
            res.json({
                error: true,
                message: "Error while delete object"
            })
        } else {
            res.json({
                error: false,
                message: "Success delete object"
            })
        }
    })
};