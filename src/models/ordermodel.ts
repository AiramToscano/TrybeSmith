import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Orders, Order } from '../interfaces/ordersinterfaces';

async function getAll(): Promise<Orders[]> {
  const query = `SELECT OD.id, OD.userId, PR.id as productsIds FROM Trybesmith.Orders AS OD
  JOIN Trybesmith.Products AS PR ON PR.orderId = OD.id;`;
  const [orders] = await connection.execute(query);
  return orders as Orders[];
}

async function createOrder(userId: number): Promise<Order> {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [userId]);
  const { insertId: id } = result;
  const newOrder: Order = { id };
  return newOrder;
}

async function editProduct(productId: number[], orderId: number): Promise<void> {
  productId.forEach(async (e) => {
    const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?;';
    await connection.execute<ResultSetHeader>(query, [orderId, e]);
  });
}

export default {
  getAll,
  createOrder,
  editProduct,
};