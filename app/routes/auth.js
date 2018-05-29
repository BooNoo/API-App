var authController = require('../controllers/authcontroller.js');
var userController = require('../controllers/usercontroller.js');

module.exports = function(app, passport) {

    app.post('/signup', userController.create);
    app.post('/signin', authController.signin);

    // app.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
    //     res.json("Success! You can not see this without a token!!!");
    // });
    // function isLoggedIn(req, res, next) {
    //     if (req.isAuthenticated())
    //         return next();
    //     res.redirect('/signin');
    // }
};