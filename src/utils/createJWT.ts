import { sign, SignOptions } from 'jsonwebtoken';
import jwtConfig from '../config/jwtConfig';

const createJWT = (emailLogin: string) => {
  const signInOptions: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '1h',
  };
  const payload = {
    name: emailLogin,
  };
  return sign(payload, jwtConfig.secret, signInOptions);
};

export default {
  createJWT,
};
