export interface Products {
  name: string;
  amount: string;
  orderId: string;
}

export type ProductsPreview = Omit<Products, 'orderId'>;