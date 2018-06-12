var userController = require('../controllers/userController.js');

module.exports = function(app, passport) {
    app.get('/user/all', passport.authenticate('jwt', { session: false }), userController.all);
};