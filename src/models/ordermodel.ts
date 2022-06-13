import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Orders, Order, OrderProducts } from '../interfaces/ordersinterfaces';

async function getAll(): Promise<Orders[]> {
  const query = `SELECT OD.id, OD.userId, PR.id as productsIds FROM Trybesmith.Orders AS OD
  JOIN Trybesmith.Products AS PR ON PR.orderId = OD.id;`;
  const [orders] = await connection.execute(query);
  return orders as Orders[];
}

async function createOrder(userId: number): Promise<Order> {
  const query = 'INSERT INTO Trybesmith.Products (userId) VALUES (?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [userId]);
  const { insertId: id } = result;
  const newOrder: Order = { id };
  return newOrder;
}

async function editProduct(productId: number, orderId: number): Promise<OrderProducts> {
  const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?;';
  await connection.execute<ResultSetHeader>(query, [orderId, productId]);
  const newUser: OrderProducts = { productId, orderId };
  return newUser;
}

export default {
  getAll,
  createOrder,
  editProduct,
};