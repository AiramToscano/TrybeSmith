import { Request, Response } from 'express';
import productsservice from '../services/productsservices';

const STATUS_CODE_OK = 200;

async function getAll(_req: Request, res: Response) {
  try {
    const products = await productsservice.getAll();
    return res.status(STATUS_CODE_OK).json(products);
  } catch (err) {
    return res.status(500).json({ message: 'nenhum produto no banco' });
  }
}

export default {
  getAll,
};
