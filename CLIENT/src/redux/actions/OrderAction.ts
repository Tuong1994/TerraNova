import { EOrderActionTypes } from "../actionTypes/OrderActionTypes";
interface GET_ORDER_LIST {
    type: EOrderActionTypes.GET_ORDER_LIST;
    payload: any;
}

interface UPDATE_ORDER {
    type: EOrderActionTypes.UPDATE_ORDER;
    payload: any;
}

export type OrderAction = GET_ORDER_LIST | UPDATE_ORDER;