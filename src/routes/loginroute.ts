import { Router } from 'express';
import logincontroller from '../controllers/logincontroller';
import loginmiddleware from '../middlewares/loginmiddleware';

const loginRoute = Router();

loginRoute.post(
  '/login',
  loginmiddleware.validateUsername,
  loginmiddleware.validatePassword,
  loginmiddleware.validateUsernameLogin,
  logincontroller.loginUser,
);

export default loginRoute;