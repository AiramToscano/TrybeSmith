import { NextFunction, Response, Request } from 'express';
import { verify, decode } from 'jsonwebtoken';
import jwtConfig from '../config/jwtConfig';
import { JwtPayload } from '../interfaces/ordersinterfaces';

const authToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  next();
};

const validToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const newToken = String(token);
  try {
    verify(newToken, jwtConfig.secret);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

function validateProducts(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }
  if (productsIds.constructor !== Array) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  if (productsIds.length <= 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  next();
}

const decodedToken = async (token: string): Promise<JwtPayload> => {
  const decoded = decode(token);
  return decoded as JwtPayload;
};

export default {
  authToken,
  validToken,
  validateProducts,
  decodedToken,
};