
import express  from 'express';

const router = express.Router();

/* GET main page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

/* GET signin page. */
router.get('/signin',function(req, res, next) {
  res.render('signin');
});


/* GET signup page. */
router.get('/signup',function(req, res, next) {
  res.render('signup');
});


export default router;
