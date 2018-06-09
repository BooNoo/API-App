module.exports = function(sequelize, Sequelize) {

    var Location = sequelize.define('location', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        name: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        code: {
            type: Sequelize.STRING,
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

    return Location;

};