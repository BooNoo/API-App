var objectImageController = require('../controllers/objectImageController.js');

module.exports = function(app, passport) {
    app.get('/object-image/:id', passport.authenticate('jwt', { session: false }), objectImageController.getById);
    app.get('/object-image/object/:id', passport.authenticate('jwt', { session: false }), objectImageController.getByObjectId);
    app.post('/object-image/object/:id', passport.authenticate('jwt', { session: false }), objectImageController.create);
    app.delete('/object-image/:id', passport.authenticate('jwt', { session: false }), objectImageController.deleteById);
};