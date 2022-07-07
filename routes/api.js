var express = require('express');
var router = express.Router();


router.get('/signin', function(req, res, next) {
  const test = false;
  if (!test) {
    return  res.render('/signin', { msg: 'Unable to login, the password or the username are wrong'})
    
  }
  const sessionId = "222zxcvbnm"
  res.cookie('loginId', sessionId);
  res.redirect('/')
  ///res.json({result:1});
  //res.render('/');
});


router.post('/signup', function(req, res, next) {

  const user = {name:'jstella'}
  res.json(user);
});

module.exports = router;
