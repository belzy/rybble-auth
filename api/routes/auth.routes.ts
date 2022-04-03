import express from 'express';
import {
  emailAuthController,
} from '../controllers';

const authRouter = express.Router();

authRouter.get('/email', emailAuthController);

export default authRouter;