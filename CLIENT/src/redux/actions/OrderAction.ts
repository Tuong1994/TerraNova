import { EOrderActionTypes } from "../actionTypes/OrderActionTypes";

interface ADD_STOCK {
    type: EOrderActionTypes.ADD_STOCK;
    payload: any;
}

interface REMOVE_STOCK {
    type: EOrderActionTypes.REMOVE_STOCK;
    payload: any;
}

export type OrderAction = ADD_STOCK | REMOVE_STOCK;