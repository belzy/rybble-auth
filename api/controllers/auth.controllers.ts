import { Request, Response } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

passport.use(new LocalStrategy((username, password, cb) => {

  

}));

const handlePostRegister = (req: Request, res: Response): void => {
  

  res.json(req.body);
};

export {
  handlePostRegister,
};