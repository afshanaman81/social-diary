const passport = require('passport')
const Strategy = require('passport-facebook').Strategy

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use('facebook',
    new Strategy(
        {
            clientID: process.env.FB_APP_ID,
            clientSecret: process.env.FB_APP_SECRET,
            callbackURL: process.env.REDIRECT_URL
        },
	    function(accessToken, refreshToken, profile, done) {
		    process.nextTick(function () {
			    return done(null, profile)
		    });
	    }
    )
)

exports.isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) return next()

    res.redirect('/')
}
