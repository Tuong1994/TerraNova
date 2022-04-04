export interface IOrder {
    productId?: string;
    productName?: string;
    amount?: number;
    note?: string;
    totalPay?: number;
    status?: number;
    deliveryType?: number;
    paymentType?: number;
}