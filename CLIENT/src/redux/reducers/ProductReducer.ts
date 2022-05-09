import { EProductActionTypes } from "../actionTypes/ProductActionTypes";
import { ICategory, IProduct } from "../../models/Product";
import { ProductAction } from "../actions/ProductAction";

interface IStateDefault {
  categoryList: ICategory[];
  productDetail: IProduct;
  productList: {
    totalProduct?: number;
    page?: number;
    limits?: number;
    productListPerPage?: IProduct[];
    categoryId?: string;
    producerName?: string;
  };
}

const stateDefault: IStateDefault = {
  categoryList: [],
  productList: {
    page: 1,
    totalProduct: 10,
    limits: 10,
    productListPerPage: [],
    categoryId: "",
    producerName: "",
  },
  productDetail: {
    productId: "",
    producerName: "",
    name: "",
    image: null,
    price: 0,
    status: 0,
    inventoryStatus: 0,
    stockAmount: 0,
    description: [],
    comments: [],
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
    case EProductActionTypes.GET_PRODUCT_BY_CATEGORY: {
      let newState = { ...state };
      newState.productList = action.payload;
      state = newState;
      return { ...state };
    }
    case EProductActionTypes.GET_PRODUCT_BY_PRODUCER: {
      let newState = { ...state };
      newState.productList = action.payload;
      state = newState;
      return { ...state };
    }
    case EProductActionTypes.GET_PRODUCT_DETAIL: {
      let newState = { ...state };
      newState.productDetail = action.payload;
      state = newState;
      return { ...state };
    }
    case EProductActionTypes.GET_PRODUCT_BY_FREE_TEXT: {
      let newState = { ...state };
      newState.productList = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
