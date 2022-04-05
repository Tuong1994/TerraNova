import * as apiPath from "../../paths";
import axiosClient from "../../axios";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { ECartsActionTypes } from "../actionTypes/CartsActionTypes";
import { ICarts } from "../../models/Carts";
import { IQueryList } from "../../interfaces/query";
import { getListQuery } from "../../configs/setting";

export const getCartsList = (err?: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(apiPath.cartsPaths.getCartsList);
      dispatch({
        type: ECartsActionTypes.GET_CARTS_LIST,
        payload: result.data,
      });
    } catch (error: any) {
      toast.error(err);
    }
  };
};

export const createCarts = (data: ICarts, success?: string, err?: string) => {
  return async (dispatch: Dispatch | any) => {
    try {
      await axiosClient.post(apiPath.cartsPaths.createCarts, data);
      dispatch(getCartsList());
      toast.success(success);
    } catch (error: any) {
      toast.error(err);
    }
  };
};

export const updateCarts = (
  data: ICarts,
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return async (dispatch: Dispatch | any) => {
    try {
      await axiosClient.put(
        apiPath.cartsPaths.updateCarts,
        data,
        getListQuery(query as IQueryList)
      );
      dispatch(getCartsList());
      toast.success(success);
    } catch (error: any) {
      toast.error(err);
    }
  };
};

export const removeCarts = (
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return async (dispatch: Dispatch | any) => {
    try {
      await axiosClient.delete(
        apiPath.cartsPaths.removeCarts,
        getListQuery(query as IQueryList)
      );
      dispatch(getCartsList());
      toast.success(success);
    } catch (error) {
      toast.error(err);
    }
  };
};
