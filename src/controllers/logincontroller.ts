import { Request, Response } from 'express';
import loginservice from '../services/loginservice';

// const STATUS_CODE_OK = 200;
const STATUS_CODE_CREATED = 201;

async function loginUser(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const result = await loginservice.getAll(username, password);
    return res.status(STATUS_CODE_CREATED).json({ token: result });
  } catch (err) {
    return res.status(500).json({ message: 'Não foi possivel fazer o login' });
  }
}

export default {
  loginUser,
};
