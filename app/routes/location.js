var locationController = require('../controllers/locationcontroller.js');

module.exports = function(app, passport) {
    app.post('/location', passport.authenticate('jwt', { session: false }), locationController.create);
    app.get('/location', passport.authenticate('jwt', { session: false }), locationController.all);
    app.get('/location/:id', passport.authenticate('jwt', { session: false }), locationController.byId);
    app.put('/location/:id', passport.authenticate('jwt', { session: false }), locationController.updateById);
    app.delete('/location/:id', passport.authenticate('jwt', { session: false }), locationController.deleteById);
};