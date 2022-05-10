import { OrderAction } from "./../actions/OrderAction";
import { IOrder } from "./../../models/Order";
import { EOrderActionTypes } from "../actionTypes/OrderActionTypes";
import { IUser } from "../../models/User";

interface IStateDefault {
  orderList: {
    total: 0;
    page: number;
    limits: number;
    orders: IOrder[];
  };
  orderDetail: IOrder;
  orderer: IUser;
}

const stateDefault: IStateDefault = {
  orderList: {
    total: 0,
    page: 0,
    limits: 0,
    orders: [],
  },
  orderDetail: {
    id: "",
    orderId: "",
    note: "",
    paymentType: 0,
    totalPay: 0,
    status: 0,
    shipmentType: 0,
    shipmentFee: 0,
    shipmentDetail: {},
    products: [],
    userId: "",
  },
  orderer: {},
};

export const OrderReducer = (state = stateDefault, action: OrderAction) => {
  switch (action.type) {
    case EOrderActionTypes.GET_ORDER_LIST: {
      let newState = { ...state };
      newState.orderList = action.payload;
      state = newState;
      return { ...state };
    }
    case EOrderActionTypes.GET_ORDER_DETAIL: {
      let newState = { ...state };
      newState.orderDetail = action.payload;
      state = newState;
      return { ...state };
    }
    case EOrderActionTypes.ADD_ORDERER: {
      let newState = { ...state };
      newState.orderer = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
