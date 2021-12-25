import * as apiPath from "../../paths/index";
import axiosClient from "../../axios/axiosClient";
import { EProductActionTypes } from "../actionTypes/ProductActionTypes";
import { Dispatch } from "redux";
import { getListQuery } from "../../configs/setting";
import { IQueryList } from "../../interfaces/query";

export const getProductList = (query: IQueryList) => {
  return async (dispatch: Dispatch) => {
    try {
      const productList = await axiosClient.get(
        apiPath.productPaths.getProductList, getListQuery(query)
      );
      dispatch({
        type: EProductActionTypes.GET_PRODUCT_LIST,
        payload: productList.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
