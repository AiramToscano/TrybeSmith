import connection from './connection';
import { Login } from '../interfaces/logininterfaces';

async function getAll(username: string, password: string): Promise<Login[]> {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username=? and password=?;';
  const [users] = await connection.execute(query, [username, password]);
  return users as Login[];
}

export default {
  getAll,
};
