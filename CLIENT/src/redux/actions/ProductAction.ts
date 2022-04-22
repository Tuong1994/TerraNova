import { EProductActionTypes } from "./../actionTypes/ProductActionTypes";

interface GET_CATEGORY_LIST {
  type: EProductActionTypes.GET_CATEGORY_LIST;
  payload: any;
}
interface GET_PRODUCT_LIST {
  type: EProductActionTypes.GET_PRODUCT_LIST;
  payload: any;
}
interface GET_PRODUCT_BY_CATEGORY {
  type: EProductActionTypes.GET_PRODUCT_BY_CATEGORY;
  payload: any;
}
interface GET_PRODUCT_BY_PRODUCER {
  type: EProductActionTypes.GET_PRODUCT_BY_PRODUCER;
  payload: any;
}
interface GET_PRODUCT_DETAIL {
  type: EProductActionTypes.GET_PRODUCT_DETAIL;
  payload: any;
}

interface GET_PRODUCT_BY_FREE_TEXT {
  type: EProductActionTypes.GET_PRODUCT_BY_FREE_TEXT;
  payload: any;
}

export type ProductAction =
  | GET_CATEGORY_LIST
  | GET_PRODUCT_LIST
  | GET_PRODUCT_BY_CATEGORY
  | GET_PRODUCT_BY_PRODUCER
  | GET_PRODUCT_DETAIL
  | GET_PRODUCT_BY_FREE_TEXT;
