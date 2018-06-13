var locationTypeController = require('../controllers/locationTypeController.js');

module.exports = function(app, passport) {
    app.post('/locationType', passport.authenticate('jwt', { session: false }), locationTypeController.create);
    app.get('/locationType', passport.authenticate('jwt', { session: false }), locationTypeController.all);
    app.get('/locationType/:id', passport.authenticate('jwt', { session: false }), locationTypeController.byId);
    app.put('/locationType/:id', passport.authenticate('jwt', { session: false }), locationTypeController.updateById);
    app.delete('/locationType/:id', passport.authenticate('jwt', { session: false }), locationTypeController.deleteById);
};