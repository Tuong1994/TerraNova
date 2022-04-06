import { ICarts } from "../../models/Carts";
import { ECartsActionTypes } from "../actionTypes/CartsActionTypes";
import { CartsAction } from "../actions/CartsAction";

interface IStateDefault {
  carts: {
    totalCarts?: number;
    page?: number;
    limits?: number;
    cartsList?: ICarts[];
  };
}

const stateDefault: IStateDefault = {
  carts: {
    totalCarts: 0,
    page: 0,
    limits: 0,
    cartsList: [],
  }
};

export const CartsReducer = (state = stateDefault, action: CartsAction) => {
  switch (action.type) {
    case ECartsActionTypes.GET_CARTS_LIST: {
      let newState = { ...state };
      newState.carts = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
