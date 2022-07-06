var express = require('express');
var router = express.Router();
/* get pages */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'home' });
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'signup' });
});

/* GET signin page. */
router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'signin' });
});


module.exports = router;
