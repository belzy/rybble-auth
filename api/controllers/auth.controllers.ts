import { Request, Response } from 'express';
import passport from 'passport';
import LocalStrategy from 'passport-local';

const emailAuthController = (req: Request, res: Response): void => {

  res.send('Auth Service Endpoint');
};

export {
  emailAuthController,
};