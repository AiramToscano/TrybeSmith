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

export interface JwtPayload{
  name: string,
  iat: number,
  exp: number,
}

export interface Userorder {
  id: number,
}