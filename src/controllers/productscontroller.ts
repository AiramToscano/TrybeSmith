import { Request, Response } from 'express';
import productsservice from '../services/productsservices';

const STATUS_CODE_OK = 200;
const STATUS_CODE_CREATED = 201;

async function getAll(_req: Request, res: Response) {
  try {
    const products = await productsservice.getAll();
    return res.status(STATUS_CODE_OK).json(products);
  } catch (err) {
    return res.status(500).json({ message: 'nenhum produto no banco' });
  }
}

async function createProduct(req: Request, res: Response) {
  try {
    const { name, amount } = req.body;
    const user = await productsservice.createProduct(name, amount);
    return res.status(STATUS_CODE_CREATED).json(user);
  } catch (err) {
    return res.status(500).json({ message: 'Não foi possivel criar o produto' });
  }
}

export default {
  getAll,
  createProduct,
};
