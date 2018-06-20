var models = require("../models");

module.exports = function (sequelize, Sequelize) {

    var ObjectVideo = sequelize.define('objectVideo', {

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

    return ObjectVideo;

};