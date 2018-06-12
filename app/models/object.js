var models = require("../models");
var MapObjectImage = models.MapObjectImage;

module.exports = function(sequelize, Sequelize) {

    var Object = sequelize.define('object', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    });

    // MapObject.hasMany(MapObjectImage);

    return Object;

};