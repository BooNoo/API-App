var models = require("../models");

module.exports = function (sequelize, Sequelize) {

    var ObjectAudio = sequelize.define('objectAudio', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        name: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        url: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    });

    return ObjectAudio;

};