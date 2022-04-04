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
   
    default:
      return { ...state };
  }
};
