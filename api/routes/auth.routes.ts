import express from 'express';
import {
  handlePostRegister,
} from '../controllers';

const authRouter = express.Router();

authRouter.post('/register/email', handlePostRegister);

export default authRouter;