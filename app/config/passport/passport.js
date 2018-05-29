var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

module.exports = function (passport, user) {
    var User = user;
    var jwtOptions = {};
    jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    jwtOptions.secretOrKey = 'tasmanianDevil';

    var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
        console.log('payload received', jwt_payload);
        User.findOne({
            where: {
                id: jwt_payload.id
            }
        }).then(function (user) {
            if (!user) {
                next(null, false);
            } else {
                next(null, user);
            }
        });
    });
    passport.use(strategy);
};