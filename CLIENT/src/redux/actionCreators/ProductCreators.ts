import * as apiPath from "../../paths";
import axiosClient from "../../axios";
import { EProductActionTypes } from "../actionTypes/ProductActionTypes";
import { Dispatch } from "redux";
import { getListQuery } from "../../configs/setting";
import { IQueryList } from "../../interfaces/query";
import { toast } from "react-toastify";
import actions from "../../configs/actions";

export const getProductList = (query: IQueryList, err?: string) => {
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
      toast.error(err);
    }
  };
};

export const getProductByCategory = (query: IQueryList, err?: string) => {
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
      toast.error(err);
    }
  };
};

export const getProductByProducer = (query: IQueryList, err?: string) => {
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
      toast.error(err);
    }
  };
};

export const getProductDetail = (query: IQueryList, err?: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.productPaths.getProductDetail,
        getListQuery(query as IQueryList)
      );
      dispatch({
        type: EProductActionTypes.GET_PRODUCT_DETAIL,
        payload: result.data,
      });
    } catch (error: any) {
      toast.error(err);
    }
  };
};

export const getProductByFreeText = (query: IQueryList, err?: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(actions.openDataLoading);
    setTimeout(async () => {
      try {
        const result = await axiosClient.get(
          apiPath.productPaths.getProductByFreeText,
          getListQuery(query as IQueryList)
        );
        dispatch({
          type: EProductActionTypes.GET_PRODUCT_BY_FREE_TEXT,
          payload: result.data,
        });
        dispatch(actions.closeDataLoading);
      } catch (error) {
        toast.error(err);
        dispatch(actions.closeDataLoading);
      }
    }, 1000);
  };
};
