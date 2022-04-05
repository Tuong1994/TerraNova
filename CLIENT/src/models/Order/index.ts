import { ICarts } from "../Carts";
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