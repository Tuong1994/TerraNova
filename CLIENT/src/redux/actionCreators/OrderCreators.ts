import * as apiPath from "../../paths/";
import axiosClient from "../../axios";
import actions from "../../configs/actions";
import { getUserDetail } from "./UserCreators";
import { ACCESSTOKEN, getListQuery } from "./../../configs/setting";
import { IQueryList } from "./../../interfaces/query";
import { IOrder } from "../../models/Order";
import { EOrderActionTypes } from "../actionTypes/OrderActionTypes";
import { EModalActionTypes } from "../actionTypes/ModalActionTypes";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

const token = localStorage.getItem(ACCESSTOKEN) || "";

export const getOrderList = (query: IQueryList) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.openDataLoading);
    setTimeout(async () => {
      try {
        const result = await axiosClient.get(
          apiPath.orderPaths.getOrderList,
          getListQuery(query as IQueryList)
        );
        dispatch({
          type: EOrderActionTypes.GET_ORDER_LIST,
          payload: result.data,
        });
        dispatch(actions.closeDataLoading);
      } catch (error: any) {
        toast.error(error.response.data);
        dispatch(actions.closeDataLoading);
      }
    }, 1000);
  };
};

export const getOrderDetail = (query: IQueryList) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.orderPaths.getOrderDetail,
        getListQuery(query as IQueryList)
      );
      dispatch({
        type: EOrderActionTypes.GET_ORDER_DETAIL,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createOrder = (
  data: IOrder,
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return (dispatch: any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.post(apiPath.orderPaths.createOrder, data);
        dispatch(getOrderList(query));
        dispatch(actions.closeButtonLoading);
        dispatch({
          type: EModalActionTypes.OPEN_PAYMENT_MODAL,
        });
        toast.success(success);
      } catch (error: any) {
        toast.error(err);
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};

export const updateOrder = (
  query: IQueryList,
  data: IOrder,
  success?: string,
  err?: string
) => {
  return (dispatch: any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.put(
          apiPath.orderPaths.updateOrder,
          getListQuery(query as IQueryList),
          data,
          token
        );
        dispatch(getOrderDetail(query));
        dispatch(actions.closeButtonLoading);
        toast.success(success);
      } catch (error) {
        dispatch(actions.closeButtonLoading);
        toast.error(err);
      }
    }, 1000);
  };
};

export const removeOrder = (
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return async (dispatch: any) => {
    try {
      await axiosClient.delete(
        apiPath.orderPaths.removeOrder,
        getListQuery(query as IQueryList),
        token
      );
      dispatch(getOrderList(query));
      dispatch(getUserDetail(query));
      toast.success(success);
    } catch (error) {
      toast.error(err);
    }
  };
};
