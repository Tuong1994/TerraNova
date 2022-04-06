import { ICarts } from "../Carts";

export enum EPaymentTypes {
    cash = 1,
    zalo = 2,
    vib = 3,
  }

export enum EShipmentType {
    noShipment = 1,
    delivery = 2,
}

export enum EProvinceType {
    
}
export interface IOrder {
    note?: string,
    paymentType?: number,
    totalPay?: number,
    status?: number,
    shipmentType?: number,
    shipmentFee?: number,
    products?: ICarts[],
    userId?: string;
}