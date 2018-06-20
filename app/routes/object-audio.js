var objectAudioController = require('../controllers/objectAudioController.js');

module.exports = function(app, passport) {
    app.post('/object-audio', passport.authenticate('jwt', { session: false }), objectAudioController.create);
    app.delete('/object-audio/:id', passport.authenticate('jwt', { session: false }), objectAudioController.deleteById);
};