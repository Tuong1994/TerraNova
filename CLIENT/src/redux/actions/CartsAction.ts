import { ECartsActionTypes } from "../actionTypes/CartsActionTypes";

interface GET_CARTS_LIST {
  type: ECartsActionTypes.GET_CARTS_LIST;
  payload?: any;
}

interface ADD_TEMP_CARTS {
  type: ECartsActionTypes.ADD_TEMP_CARTS;
  payload?: any;
}
interface UPDATE_TEMP_CARTS {
  type: ECartsActionTypes.UPDATE_TEMP_CARTS;
  payload?: any;
}

export type CartsAction = GET_CARTS_LIST | ADD_TEMP_CARTS | UPDATE_TEMP_CARTS;
