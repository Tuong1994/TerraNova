import * as apiPath from "../../paths/index";
import axiosClient from "../../axios";
import { EProductActionTypes } from "../actionTypes/ProductActionTypes";
import { Dispatch } from "redux";
import { getListQuery } from "../../configs/setting";
import { IQueryList } from "../../interfaces/query";
import { toast } from "react-toastify";

export const getProductList = (query: IQueryList) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.productPaths.getProductList,
        getListQuery(query as IQueryList)
      );
      dispatch({
        type: EProductActionTypes.GET_PRODUCT_LIST,
        payload: result.data,
      });
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };
};

export const getProductByCategory = (query: IQueryList) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.productPaths.getProductByCategory,
        getListQuery(query as IQueryList)
      );
      dispatch({
        type: EProductActionTypes.GET_PRODUCT_BY_CATEGORY,
        payload: result.data,
      });
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };
};

export const getProductByProducer = (query: IQueryList) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.productPaths.getProductByProducer,
        getListQuery(query as IQueryList)
      );
      dispatch({
        type: EProductActionTypes.GET_PRODUCT_BY_PRODUCER,
        payload: result.data,
      });
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };
};

export const getProductDetail = (query: IQueryList) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.productPaths.getAccessoriesDetail,
        getListQuery(query as IQueryList)
      );
      dispatch({
        type: EProductActionTypes.GET_PRODUCT_DETAIL,
        payload: result.data,
      });
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };
};
