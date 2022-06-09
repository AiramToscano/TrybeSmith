export interface Products {
  name: string;
  amount: string;
  orderId: string;
}

export type ProductsPreview = Omit<Products, 'orderId'>;

export interface ProductsId extends ProductsPreview {
  id: number
}
