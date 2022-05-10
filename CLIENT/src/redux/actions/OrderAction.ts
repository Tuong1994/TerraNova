import { EOrderActionTypes } from "../actionTypes/OrderActionTypes";
interface GET_ORDER_LIST {
  type: EOrderActionTypes.GET_ORDER_LIST;
  payload: any;
}

interface GET_ORDER_DETAIL {
  type: EOrderActionTypes.GET_ORDER_DETAIL;
  payload: any;
}

interface UPDATE_ORDER {
  type: EOrderActionTypes.UPDATE_ORDER;
  payload: any;
}

interface ADD_ORDERER {
  type: EOrderActionTypes.ADD_ORDERER;
  payload: any;
}

export type OrderAction =
  | GET_ORDER_LIST
  | GET_ORDER_DETAIL
  | UPDATE_ORDER
  | ADD_ORDERER;
