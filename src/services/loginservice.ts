import loginmodel from '../models/loginmodel';
import createtoken from '../utils/createJWT';

async function getAll(username: string, password: string) {
  const data = await loginmodel.getAll(username, password);
  if (!data) return { status: 401, message: 'Username or password invalid' };
  const createToken = createtoken.createJWT(username);
  return createToken;
}

export default {
  getAll,
};