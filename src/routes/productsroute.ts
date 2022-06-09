import { Router } from 'express';
import productscontroller from '../controllers/productscontroller';
import middlewareProducts from '../middlewares/productsMiddleware';

const productsRoute = Router();

productsRoute.get('/products', productscontroller.getAll);
productsRoute.post(
  '/products',
  middlewareProducts.validateName,
  middlewareProducts.validateAmount,
  productscontroller.createProduct,
);

export default productsRoute;