import { sign, SignOptions } from 'jsonwebtoken';
import jwtConfig from '../config/jwtConfig';

const createJWT = (emailLogin: string) => {
  const signInOptions: SignOptions = {
    algorithm: 'RS256',
    expiresIn: '1h',
  };
  const token = sign({ data: emailLogin }, jwtConfig.secret, signInOptions);
  return token;
};

export default {
  createJWT,
};
