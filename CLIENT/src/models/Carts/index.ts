export interface IProductCarts {
  productId?: string;
  productName?: string;
  amount?: number;
  price?: number;
  image?: any;
}
export interface ICarts {
  cartsId?: string;
  products?: IProductCarts[];
  userId?: string;
}
