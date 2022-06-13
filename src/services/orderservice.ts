import ordersmodel from '../models/ordermodel';

async function getAll() {
  const data = await ordersmodel.getAll();
  const dataOrder = data.map(({ id, userId, productsIds }) => {
    const obj = {
      id,
      userId,
      productsIds: [productsIds],
    };
    return obj;
  });
  return dataOrder;
}

async function newOrder(userId: number, data: number[]) {
  const order = await ordersmodel.createOrder(userId);
  data.forEach(async (e) => {
    await ordersmodel.editProduct(e, order.id);
  });
  return true;
}

export default {
  getAll,
  newOrder,
};