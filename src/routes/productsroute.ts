import { Router } from 'express';
import productscontroller from '../controllers/productscontroller';

const productsRoute = Router();

productsRoute.get('/products', productscontroller.getAll);
productsRoute.post('/products', productscontroller.createProduct);

export default productsRoute;