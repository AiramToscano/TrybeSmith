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
  const teste = await ordersmodel.editProduct(data, order.id);

  return teste;
}

export default {
  getAll,
  newOrder,
};