import { Request, Response } from 'express';
import userservice from '../services/userservices';

// const STATUS_CODE_OK = 200;
const STATUS_CODE_CREATED = 201;

async function createUser(req: Request, res: Response) {
  try {
    const { username, classe, level, password } = req.body;
    const token = await userservice.createUser(username, classe, level, password);
    return res.status(STATUS_CODE_CREATED).json(token);
  } catch (err) {
    return res.status(500).json({ message: 'nenhum usuario criado' });
  }
}

export default {
  createUser,
};
