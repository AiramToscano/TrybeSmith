export interface Orders {
  id: number;
  userId: number,
  productsIds: number[],
}

export interface Order {
  id: number
}

export interface OrderProducts {
  productId: number,
  orderId: number,
}

export interface Verify{
  id: number,
  iat: number,
  exp: number,
}