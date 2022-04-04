import { ICarts } from "../../models/Carts";
import { ECartsActionTypes } from "../actionTypes/CartsActionTypes";
import { CartsAction } from "../actions/CartsAction";

interface IStateDefault {
  carts: ICarts[];
}

const stateDefault: IStateDefault = {
  carts: [],
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
