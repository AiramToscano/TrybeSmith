import connection from './connection';
import { Products } from '../interfaces/productsinterfaces';
// import { ResultSetHeader } from 'mysql2';

async function getAll(): Promise<Products[]> {
  const query = 'SELECT * FROM Trybesmith.Products;';
  const [products] = await connection.execute(query);
  return products as Products[];
}

export default {
  getAll,
};
