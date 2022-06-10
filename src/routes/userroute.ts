import { Router } from 'express';
import userscontroller from '../controllers/usercontrollers';
// import middlewareProducts from '../middlewares/productsMiddleware';

const userRoute = Router();

userRoute.post('/products', userscontroller.createUser);

export default userRoute;