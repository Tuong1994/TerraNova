import { ICarts } from "../../models/Carts";
import { ECartsActionTypes } from "../actionTypes/CartsActionTypes";
import { CartsAction } from "../actions/CartsAction";

let tempCarts: any = [];
if (localStorage.getItem("carts")) {
  const carts = localStorage.getItem("carts");
  tempCarts = JSON.parse(carts || "");
}
interface IStateDefault {
  carts: ICarts[];
  tempCarts: ICarts;
}

const stateDefault: IStateDefault = {
  carts: [],
  tempCarts: tempCarts,
};

export const CartsReducer = (state = stateDefault, action: CartsAction) => {
  switch (action.type) {
    case ECartsActionTypes.GET_CARTS_LIST: {
      let newState = { ...state };
      newState.carts = action.payload;
      state = newState;
      return { ...state };
    };
    case ECartsActionTypes.ADD_TEMP_CARTS: {
      let newState = { ...state };
      newState.tempCarts = action.payload;
      state = newState;
      return { ...state };
    };
    case ECartsActionTypes.UPDATE_TEMP_CARTS: {
      let newState = { ...state };
      newState.tempCarts = action.payload;
      state = newState;
      return { ...state };
    };
    default:
      return { ...state };
  }
};
