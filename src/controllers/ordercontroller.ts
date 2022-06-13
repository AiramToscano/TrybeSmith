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

async function createOrder(req: Request, res: Response) {
  try {
    const { userId, productsIds } = req.body;
    await orderservice.newOrder(userId, productsIds);
    const obj = {
      userId, 
      productsIds,
    };
    return res.status(201).json(obj);
  } catch (err) {
    return res.status(500).json({ message: 'nenhuma order foi criada' });
  }
}

export default {
  getAll,
  createOrder,
};
