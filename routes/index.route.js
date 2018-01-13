var express = require('express');
var router = express.Router();
const passportHelper = require('../helpers/passport')

/* GET Home page. */
router.get('/', passportHelper.isAuthenticated, function(req, res) {
	res.render('index', { title: 'Social Diary', message: "Welcome"  });
})


module.exports = router;
