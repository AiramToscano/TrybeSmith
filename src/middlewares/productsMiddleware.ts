import { NextFunction, Response, Request } from 'express';

function validateName(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  if (!name) return res.status(404).json({ message: '"name" is required' });
  if (typeof (name) !== 'string') {
    return res.status(404).json({ message: '"name" must be a string' });
  }
  if (name.length < 2) {
    return res.status(404).json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
}

export default {
  validateName,
};