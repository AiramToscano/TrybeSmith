import { NextFunction, Response, Request } from 'express';
import loginservice from '../services/loginservice';

function validateUsername(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;
  if (!username) return res.status(400).json({ message: '"username" is required' });
  next();
}

function validatePassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: '"password" is required' });
  next();
}

async function validateUsernameLogin(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  const result = await loginservice.getAll(username, password);
  if (!result) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  next();
}

export default {
  validateUsername,
  validatePassword,
  validateUsernameLogin,
};
