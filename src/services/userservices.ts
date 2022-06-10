import usersmodel from '../models/usersmodel';
import createtoken from '../utils/createJWT';

async function createUser(username: string, classe: string, level: number, password: string) {
  await usersmodel.createUser(username, classe, level, password);
  const createToken = createtoken.createJWT(username);
  return createToken;
}

export default {
  createUser,
};
