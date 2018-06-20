var models = require("../models");
var ObjectVideo = models.objectVideo;

var exports = module.exports = {};

exports.create = function (req, res) {
    console.log(req.body.url);
    var data = {
        url: req.body.url,
        fk_objectid: req.body.fk_objectid
    };
    ObjectVideo.create(data).then(function (location, created) {
        if (!location) {
            res.json({error: true, message: "Error in object video create"})
        }
        if (location) {
            res.json({error: false, message: "Object video created", object: location})
        }
    });
};

exports.deleteById = function (req, res) {
    ObjectVideo.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (value) {
        if (!value) {
            res.json({error: true, message: "Error while delete object video"})
        } else {
            res.json({error: false, message: "Success delete object video"})
        }
    })
};