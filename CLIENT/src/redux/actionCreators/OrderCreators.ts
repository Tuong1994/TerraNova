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

export const getOrderList = () => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(apiPath.orderPaths.getOrderList);
      dispatch({
        type: EOrderActionTypes.GET_ORDER_LIST,
        payload: result.data,
      });
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };
};

export const createOrder = (data: IOrder, success?: string, err?: string) => {
  return (dispatch: Dispatch | any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.post(apiPath.orderPaths.createOrder, data);
        dispatch(getOrderList());
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

export const removeOrder = (
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return async (dispatch: any) => {
    const token = localStorage.getItem(ACCESSTOKEN) || "";
    try {
      await axiosClient.delete(
        apiPath.orderPaths.removeOrder,
        getListQuery(query as IQueryList),
        token
      );
      dispatch(getOrderList());
      dispatch(getUserDetail(query));
      toast.success(success);
    } catch (error) {
      toast.error(err);
    }
  };
};
