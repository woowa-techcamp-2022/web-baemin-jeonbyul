import express  from 'express';
import { createSessionId } from '../utils/session.js'
import { signIn ,signUp} from '../controller/auth.js'
import config from '../config/index.js'

const router = express.Router();

router.post('/signin', async (req, res, next) => {

  const { userId , password } = req.body;
  const user = await signIn(userId , password );
  if(user){
    const sessionId = createSessionId(userId);
    res.cookie('sessionId', sessionId,  { maxAge: config.cookieMaxAge });
    res.json({result: 1,  user : user })
  }else{
    res.json({result: 0});
  }

});


router.post('/signup', async (req, res, next) => {
  const user = req.body;
  const result = await signUp(user);
  res.json({result: result});
});


export default router;