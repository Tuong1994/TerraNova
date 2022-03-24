import { EOrderActionTypes } from "../actionTypes/OrderActionTypes";

interface ADD_STOCK {
    type: EOrderActionTypes.ADD_STOCK;
    payload: any;
}

export type OrderAction = ADD_STOCK;