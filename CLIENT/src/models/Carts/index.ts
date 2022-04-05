export enum EPaymentTypes {
  cash = 1,
  zalo = 2,
  vib = 3,
}

export interface ICarts {
  cartsId?: string;
  productId?: string;
  productName?: string;
  amount?: number;
  price?: number;
  image?: string;
}
