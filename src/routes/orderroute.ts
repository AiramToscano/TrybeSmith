import { Router } from 'express';
import ordercontroller from '../controllers/ordercontroller';

const odersRoute = Router();

odersRoute.get('/orders', ordercontroller.getAll);

export default odersRoute;
