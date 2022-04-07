import { ICarts } from "../Carts";
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
    note?: string,
    paymentType?: number,
    totalPay?: number,
    status?: number,
    shipmentType?: number,
    shipmentFee?: number,
    shipmentDetail: IShipment;
    products?: ICarts[],
    userId?: string;
}