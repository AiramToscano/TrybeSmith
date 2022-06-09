import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Products, ProductsId } from '../interfaces/productsinterfaces';

async function getAll(): Promise<Products[]> {
  const query = 'SELECT * FROM Trybesmith.Products;';
  const [products] = await connection.execute(query);
  return products as Products[];
}

async function createProduct(name: string, amount: string): Promise<ProductsId> {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = result;
  const newUser: ProductsId = { id, name, amount };
  return newUser;
}

export default {
  getAll,
  createProduct,
};
