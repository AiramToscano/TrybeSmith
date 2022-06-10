import ordersmodel from '../models/ordermodel';

async function getAll() {
  const data = await ordersmodel.getAll();
  return data;
}

export default {
  getAll,
};