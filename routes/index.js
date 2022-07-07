
import express  from 'express';
import { createSessionId } from '../utils/session.js'
const router = express.Router();
/* get pages */

/* GET main page. */
router.get('/', function(req, res, next) {
  console.log(req.cookies.userId)
  const userId = req.cookies.userId;
  res.render('main', { userId : userId });
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'signup' });
});

router.post('/signin', function(req, res, next) {
  
  const {id, pw} =  req.body
  if(id!= "jstella"){
    return  res.render('signin', { msg: 'Unable to login, the password or the id are wrong'})
    
  }
  const sessionId = createSessionId();
  console.log(sessionId)
  res.cookie('loginId', sessionId,  { maxAge: 5000 });
  res.cookie('userId', "stella", {maxAge: 5000} );
  res.redirect('/')
  ///res.json({result:1});
  

 // res.render('main', { title: 'signup' });
});


/* GET signin page. */
router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'signin' });
});


export default router;
