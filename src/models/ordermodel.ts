import connection from './connection';
import { Orders } from '../interfaces/ordersinterfaces';

async function getAll(): Promise<Orders[]> {
  const query = `SELECT OD.id, OD.userId, PR.id as productsIds FROM Trybesmith.Orders AS OD
  JOIN Trybesmith.Products AS PR ON PR.orderId = OD.id;`;
  const [orders] = await connection.execute(query);
  return orders as Orders[];
}

export default {
  getAll,
};