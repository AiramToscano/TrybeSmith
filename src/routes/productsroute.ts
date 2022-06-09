import { Router } from 'express';
import productscontroller from '../controllers/productscontroller';

const productsRoute = Router();

productsRoute.get('/products', productscontroller.getAll);

export default productsRoute;