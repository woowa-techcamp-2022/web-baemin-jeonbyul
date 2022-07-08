
import express  from 'express';

const router = express.Router();

/* GET main page. */
router.get('/', function(req, res, next) {
  const userId = req.cookies.userId
  res.render('main',{userId});
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
