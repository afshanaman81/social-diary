const express = require('express')
const router = express.Router()
const passport = require('passport')

/*Routes for using Local Passport Strategy*/
/* GET Login page. */
router.get('/', function(req, res) {
	res.render('login', { title: 'Diary - Login', message: "Please Login"  });
})

/* Handle Login POST */
router.post('/login', passport.authenticate('login', {
	successRedirect: '/home',
	failureRedirect: '/',
	failureFlash : true
}));

/* GET Registration Page for local strategy */
router.get('/signup', function(req, res){
	res.render('register',{title: 'Diary - Sign up', message: "Please Sign up"});
});

/* Handle Registration POST */
router.post('/signup', passport.authenticate('signup', {
	successRedirect: '/home',
	failureRedirect: '/',
	failureFlash : true
}));

/* Handle Logout */
router.get('/signout', function(req, res) {
	req.logout();
	res.redirect('/');
});



/*Routes for using Facebook Strategy*/
router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }))

// handle the callback after facebook has authenticated the user
router.get('/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/home',
        failureRedirect: '/'
    })
)

module.exports = router
