import { Router } from 'express';
import userscontroller from '../controllers/usercontrollers';
import usermiddleware from '../middlewares/usermiddleware';

const userRoute = Router();

userRoute.post(
  '/users',
  usermiddleware.validateUsername,
  usermiddleware.validateClasse,
  usermiddleware.validateLevel,
  usermiddleware.validatePassword,
  userscontroller.createUser,
);

export default userRoute;