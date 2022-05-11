import * as apiPath from "../../paths";
import axiosClient from "../../axios";
import actions from "../../configs/actions";
import { ACCESSTOKEN } from "./../../configs/setting";
import { EProductActionTypes } from "../actionTypes/ProductActionTypes";
import { Dispatch } from "redux";
import { getListQuery } from "../../configs/setting";
import { IQueryList } from "../../interfaces/query";
import { toast } from "react-toastify";

export const getProductList = (query: IQueryList, err?: string) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.openDataLoading);
    setTimeout(async () => {
      try {
        const result = await axiosClient.get(
          apiPath.productPaths.getProductList,
          getListQuery(query as IQueryList)
        );
        dispatch({
          type: EProductActionTypes.GET_PRODUCT_LIST,
          payload: result.data,
        });
        dispatch(actions.closeDataLoading);
      } catch (error: any) {
        dispatch(actions.closeDataLoading);
        toast.error(err);
      }
    }, 1000);
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

export const createProduct = (data: any, success?: string, err?: string) => {
  return (dispatch: Dispatch) => {
    const token = localStorage.getItem(ACCESSTOKEN) || "";
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        const result = await axiosClient.post(
          apiPath.productPaths.createProduct,
          data,
          token
        );
        dispatch({
          type: EProductActionTypes.CREATE_PRODUCT,
          payload: result.data,
        });
        dispatch(actions.closeButtonLoading);
        toast.success(success);
      } catch (error) {
        dispatch(actions.closeButtonLoading);
        toast.error(err);
      }
    }, 1000);
  };
};

export const updateProduct = (
  query: IQueryList,
  data: any,
  success?: string,
  err?: string
) => {
  return (dispatch: any) => {
    const token = localStorage.getItem(ACCESSTOKEN) || "";
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.put(
          apiPath.productPaths.updateProduct,
          getListQuery(query as IQueryList),
          data,
          token
        );
        dispatch(getProductDetail(query));
        dispatch(actions.closeButtonLoading);
        toast.success(success);
      } catch (error) {
        dispatch(actions.closeButtonLoading);
        toast.error(err);
      }
    }, 1000);
  };
};

export const removeProduct = (
  query: IQueryList,
  success?: string,
  err?: string,
  data?: any
) => {
  return async (dispatch: any) => {
    const token = localStorage.getItem(ACCESSTOKEN) || "";
    try {
      await axiosClient.delete(
        apiPath.productPaths.removeProduct,
        getListQuery(query as IQueryList),
        token,
        data
      );
      dispatch(getProductList(query));
      toast.success(success);
    } catch (error) {
      toast.error(err);
    }
  };
};
