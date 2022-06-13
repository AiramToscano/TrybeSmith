import ordersmodel from '../models/ordermodel';
import decodedToken from '../middlewares/ordermiddleware';

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

async function newOrder(dataProducts: number[], dataDecode: string) {
  const decodeData = await decodedToken.decodedToken(dataDecode);
  const { name } = decodeData;
  const [getuser] = await ordersmodel.getidOrder(name);
  const order = await ordersmodel.createOrder(getuser.id);
  await ordersmodel.editProduct(dataProducts, order.id);
  return getuser;
}

export default {
  getAll,
  newOrder,
};