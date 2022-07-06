var express = require('express');
var router = express.Router();


router.get('/signin', function(req, res, next) {
  res.json({result:1});
});


router.post('signup', function(req, res, next) {
  const user = {name:'jstella'}
  res.json(user);
});

module.exports = router;
