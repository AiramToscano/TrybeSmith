import usersmodel from '../models/usersmodel';

async function createUser(username: string, classe: string, level: number, password: string) {
  const data = await usersmodel.createUser(username, classe, level, password);
  console.log(data);
  return data;
}

export default {
  createUser,
};
