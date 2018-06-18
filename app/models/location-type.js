module.exports = function(sequelize, Sequelize) {

    var LocationType = sequelize.define('locationType', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        name: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        iconUrl: {
            type: Sequelize.TEXT('long'),
            notEmpty: true
        }
    });

    return LocationType;

};