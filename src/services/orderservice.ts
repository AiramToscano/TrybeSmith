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

export default {
  getAll,
};