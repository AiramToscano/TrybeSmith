import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Users, UsersId } from '../interfaces/usersinterfaces';

async function createUser(
  username: string,
  classe: string, 
  level: number, 
  password: string,
): Promise<Users> {
  const query = 'INSERT INTO Trybesmith.Users (name, classe, level, password) VALUES (?, ?, ?, ?)';
  const [result] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);
  const { insertId: id } = result;
  const newUser: UsersId = { id, username, classe, level, password };
  return newUser;
}

export default {
  createUser,
};
