import { IProductCarts } from "../Carts";
import { IShipment } from "../Shipment";

export enum EPaymentTypes {
  cash = 1,
  zalo = 2,
  vib = 3,
}

export enum EShipmentType {
  noShipment = 1,
  delivery = 2,
}

export enum EStatus {
  paid = 1,
}

export interface IOrder {
  id?: string;
  orderId?: string;
  note?: string;
  paymentType?: number;
  totalPay?: number;
  status?: number;
  shipmentType?: number;
  shipmentFee?: number;
  shipmentDetail: IShipment;
  products?: IProductCarts[];
  userId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
