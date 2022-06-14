import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Orders, Order, Userorder } from '../interfaces/ordersinterfaces';

async function getAll(): Promise<Orders[]> {
  const query = `SELECT OD.id, OD.userId, PR.id as productsIds FROM Trybesmith.Orders AS OD
  JOIN Trybesmith.Products AS PR ON PR.orderId = OD.id;`;
  // const query2 = ` SELECT ord.id, ord.userId, prd.id AS productsIds FROM Trybesmith.Orders AS ord
  // JOIN Trybesmith.Products AS prd ON ord.id = prd.orderId;`;
  const [orders] = await connection.execute(query);
  return orders as Orders[];
}

async function createOrder(userId: number): Promise<Order> {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?);';
  const [result] = await connection.execute<ResultSetHeader>(query, [userId]);
  const { insertId: id } = result;
  const newOrder: Order = { id };
  return newOrder;
}

async function editProduct(productId: number[], orderId: number): Promise<void> {
  productId.forEach(async (e) => {
    const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?;';
    await connection.execute(query, [orderId, e]);
  });
}

async function getidOrder(username: string): Promise<Userorder[]> {
  const query = 'SELECT id FROM Trybesmith.Users WHERE username= ?;';
  const [users] = await connection.execute(query, [username]);
  return users as Userorder[];
}

export default {
  getAll,
  createOrder,
  editProduct,
  getidOrder,
};