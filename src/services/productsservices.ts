import productsmodel from '../models/productsmodel';

async function getAll() {
  const data = await productsmodel.getAll();
  return data;
}

// const objErrorExists = {
//   error: 409,
//   message: 'Product already exists',
// };

// class objErrorExists extends Error {
  
// };

async function createProduct(name: string, amount: string) {
  const data = await productsmodel.createProduct(name, amount);
  // console.log(data);
  if (!data) throw new Error('Não foi possivel fazer o cadastro do produto');
  return data;
}

export default {
  getAll,
  createProduct,
};
