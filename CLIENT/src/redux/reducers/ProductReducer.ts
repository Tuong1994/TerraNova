import { EProductActionTypes } from "../actionTypes/ProductActionTypes";
import { ICategory, IProduct } from "../../models/Product/IProduct";
import { ProductAction } from "../actions/ProductAction";

interface IStateDefault {
  categoryList: ICategory[];
  productList: {
    page: number;
    totalProduct: number;
    limits: number;
    productListPerPage: IProduct[];
  };
}

const stateDefault: IStateDefault = {
  categoryList: [],
  productList: {
    page: 1,
    totalProduct: 10,
    limits: 10,
    productListPerPage: [],
  },
};

export const ProductReducer = (state = stateDefault, action: ProductAction) => {
  switch (action.type) {
    case EProductActionTypes.GET_PRODUCT_LIST: {
      let newState = { ...state };
      newState.productList = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
