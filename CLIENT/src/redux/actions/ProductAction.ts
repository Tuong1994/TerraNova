import { EProductActionTypes } from "../actionTypes/ProductActionTypes";

interface GET_CATEGORY_LIST {
  type: EProductActionTypes.GET_CATEGORY_LIST;
  payload?: any;
}
interface GET_PRODUCT_LIST {
  type: EProductActionTypes.GET_PRODUCT_LIST;
  payload?: any;
}

export type ProductAction = GET_CATEGORY_LIST | GET_PRODUCT_LIST;
