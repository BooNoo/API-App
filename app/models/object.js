var models = require("../models");
var MapObjectImage = models.MapObjectImage;

module.exports = function (sequelize, Sequelize) {

    var Object = sequelize.define('object', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        information: {
            type: Sequelize.TEXT('long'),
            notEmpty: true
        },
        latitude: {
            type: Sequelize.FLOAT,
            notEmpty: true
        },
        longitude: {
            type: Sequelize.FLOAT,
            notEmpty: true
        }

    });

    return Object;

};