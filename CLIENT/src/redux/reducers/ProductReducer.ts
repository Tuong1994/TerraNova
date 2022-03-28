import { EProductActionTypes } from "../actionTypes/ProductActionTypes";
import { ICategory, IAccessories } from "../../models/Product";
import { ProductAction } from "../actions/ProductAction";

interface IStateDefault {
  categoryList: ICategory[];
  productDetail: IAccessories;
  productList: {
    totalProduct?: number;
    page?: number;
    limits?: number;
    productListPerPage?: IAccessories[];
    categoryId?: string;
    categoryName?: string;
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
    categoryName: "",
    producerName: "",
  },
  productDetail: {
    productId: "",
    producerName: "",
    name: "",
    image: null,
    price: 0,
    description: "",
    totalCores: "",
    totalThreads: "",
    baseFrequency: "",
    cache: "",
    busSpeed: "",
    tdp: "",
    socket: "",
    chipset: "",
    ram: "",
    capacity: "",
    ramBus: "",
    type: "",
    size: "",
    graphicEngine: "",
    videoMemory: "",
    cudaCore: "",
    memoryInterface: "",
    model: "",
    outputCapacity: "",
    efficiency: "",
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
    default:
      return { ...state };
  }
};
