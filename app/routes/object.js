var objectController = require('../controllers/objectController.js');

module.exports = function(app, passport) {
    app.post('/object', passport.authenticate('jwt', { session: false }), objectController.create);
    app.get('/object', passport.authenticate('jwt', { session: false }), objectController.getAll);
    app.get('/object/:id', passport.authenticate('jwt', { session: false }), objectController.getById);
    app.put('/object/:id', passport.authenticate('jwt', { session: false }), objectController.updateById);
    app.delete('/object/:id', passport.authenticate('jwt', { session: false }), objectController.deleteById);
};