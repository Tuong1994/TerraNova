import { ECartsActionTypes } from "../actionTypes/CartsActionTypes";

interface GET_CARTS_LIST {
    type: ECartsActionTypes.GET_CARTS_LIST,
    payload?: any;
}

export type CartsAction = GET_CARTS_LIST;