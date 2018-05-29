var userController = require('../controllers/usercontroller.js');

module.exports = function(app, passport) {
    app.get('/user/all', passport.authenticate('jwt', { session: false }), userController.all);
};