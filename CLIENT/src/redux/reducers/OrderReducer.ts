import { OrderAction } from "./../actions/OrderAction";
import { IOrder } from "./../../models/Order";
import { EOrderActionTypes } from "../actionTypes/OrderActionTypes";
import { IUser } from "../../models/User";

interface IStateDefault {
  orders: IOrder[];
  orderer: IUser;
}

const stateDefault: IStateDefault = {
  orders: [],
  orderer: {},
};

export const OrderReducer = (state = stateDefault, action: OrderAction) => {
  switch (action.type) {
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
