var objectVideoController = require('../controllers/objectVideoController.js');

module.exports = function(app, passport) {
    app.post('/object-video', passport.authenticate('jwt', { session: false }), objectVideoController.create);
    app.delete('/object-video/:id', passport.authenticate('jwt', { session: false }), objectVideoController.deleteById);
};