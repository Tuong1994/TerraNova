import { OrderAction } from "./../actions/OrderAction";
import { IOrder } from "./../../models/Order";
import { EOrderActionTypes } from "../actionTypes/OrderActionTypes";

interface IStateDefault {
  orders: IOrder[];
}

const stateDefault: IStateDefault = {
  orders: [],
};

export const OrderReducer = (state = stateDefault, action: OrderAction) => {
  switch (action.type) {
    case EOrderActionTypes.ADD_STOCK: {
      let newState = { ...state };
      let index = newState.orders.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (index !== -1) {
        newState.orders[index].quanlity = 0;
        newState.orders[index].quanlity += action.payload.quanlity;
      } else {
        newState.orders.push(action.payload);
      }
      state = newState;
      return { ...state };
    }
    case EOrderActionTypes.REMOVE_STOCK: {
      let newState = { ...state };
      let newStateUpdated = newState.orders.filter(
        (i) => i.productId !== action.payload.productId
      );
      state.orders = newStateUpdated;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
