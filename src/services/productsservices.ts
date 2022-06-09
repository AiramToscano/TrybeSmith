import productsservice from '../models/productsmodel';

async function getAll() {
  const data = await productsservice.getAll();
  return data;
}

async function createProduct(name: string, amount: string) {
  const data = await productsservice.createProduct(name, amount);
  // console.log(data);
  return data;
}

export default {
  getAll,
  createProduct,
};
