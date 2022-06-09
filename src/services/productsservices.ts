import productsservice from '../models/productsmodel';

async function getAll() {
  const data = await productsservice.getAll();
  return data;
}

export default {
  getAll,
};
