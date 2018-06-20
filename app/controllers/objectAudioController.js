var models = require("../models");
var ObjectAudio = models.objectAudio;

var exports = module.exports = {};

exports.create = function (req, res) {
    console.log(req.body.url);
    var data = {
        name: req.body.name,
        url: req.body.url,
        fk_objectid: req.body.fk_objectid
    };
    ObjectAudio.create(data).then(function (objectAudio, created) {
        if (!objectAudio) {
            res.json({error: true, message: "Error in object audio create"})
        }
        if (objectAudio) {
            res.json({error: false, message: "Object audio created", object: objectAudio})
        }
    });
};

exports.deleteById = function (req, res) {
    ObjectAudio.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (value) {
        if (!value) {
            res.json({error: true, message: "Error while delete object audio"})
        } else {
            res.json({error: false, message: "Success delete object audio"})
        }
    })
};