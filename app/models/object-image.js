var models = require("../models");
var MapObject = models.MapObject;

module.exports = function(sequelize, Sequelize) {

    var ObjectImage = sequelize.define('objectImage', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        url: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    });

    return ObjectImage;

};