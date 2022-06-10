import { Request, Response } from 'express';
import orderservice from '../services/orderservice';

const STATUS_CODE_OK = 200;
// const STATUS_CODE_CREATED = 201;

async function getAll(_req: Request, res: Response) {
  try {
    const products = await orderservice.getAll();
    return res.status(STATUS_CODE_OK).json(products);
  } catch (err) {
    return res.status(500).json({ message: 'nenhum produto no banco' });
  }
}

export default {
  getAll,
};
