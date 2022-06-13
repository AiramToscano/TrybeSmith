import { Router } from 'express';
import ordercontroller from '../controllers/ordercontroller';
import ordermiddleware from '../middlewares/ordermiddleware';

const odersRoute = Router();

odersRoute.get('/orders', ordercontroller.getAll);
odersRoute.post(
  '/orders',
  ordermiddleware.authToken,
  ordermiddleware.validToken,
  ordermiddleware.validateProducts,
  ordercontroller.createOrder,
);

export default odersRoute;
