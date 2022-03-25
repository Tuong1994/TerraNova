import { OrderAction } from "./../actions/OrderAction";
import { IOrder } from "./../../models/Order";
import { EOrderActionTypes } from "../actionTypes/OrderActionTypes";

interface IStateDefault {
  order: IOrder[];
}

const stateDefault: IStateDefault = {
  order: [
    {
      productId: "",
      productName: "",
      quanlity: 0,
      price: 0,
    }
  ],
};

export const OrderReducer = (state = stateDefault, action: OrderAction) => {
  switch (action.type) {
    case EOrderActionTypes.ADD_STOCK: {
      let newState = { ...state };
      let index = newState.order.findIndex(item => item.productId === action.payload.productId);
      newState.order.push(action.payload);
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
