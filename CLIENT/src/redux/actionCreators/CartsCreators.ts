import * as apiPath from "../../paths";
import axiosClient from "../../axios";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { ECartsActionTypes } from "../actionTypes/CartsActionTypes";
import { ICarts } from "../../models/Carts";
import { IQueryList } from "../../interfaces/query";
import { getListQuery } from "../../configs/setting";
import { getUserDetail } from "./UserCreators";
import actions from "../../configs/actions";

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

export const createCarts = (data: ICarts, success?: string, err?: string, query?: IQueryList) => {
  return (dispatch: Dispatch | any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.post(apiPath.cartsPaths.createCarts, data);
        dispatch(getCartsList());
        dispatch(getUserDetail(query as IQueryList));
        dispatch(actions.closeButtonLoading);
        toast.success(success);
      } catch (error: any) {
        dispatch(actions.closeButtonLoading);
        toast.error(err);
      }
    }, 1000);
  };
};

export const updateCarts = (
  data: ICarts,
  query: IQueryList,
  success?: string,
  err?: string,
  userQuery?: IQueryList,
) => {
  return (dispatch: Dispatch | any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.put(
          apiPath.cartsPaths.updateCarts,
          data,
          getListQuery(query as IQueryList)
        );
        dispatch(getCartsList());
        dispatch(getUserDetail(userQuery as IQueryList))
        dispatch(actions.closeButtonLoading);
        toast.success(success);
      } catch (error: any) {
        dispatch(actions.closeButtonLoading);
        toast.error(err);
      }
    }, 1000);
  };
};

export const removeCarts = (
  query: IQueryList,
  userQuery?: IQueryList,
) => {
  return (dispatch: Dispatch | any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.delete(
          apiPath.cartsPaths.removeCarts,
          getListQuery(query as IQueryList)
        );
        dispatch(getCartsList());
        dispatch(getUserDetail(userQuery as IQueryList))
        dispatch(actions.closeButtonLoading);
      } catch (error) {
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};
