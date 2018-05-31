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
        }
    });

    return Location;

};