import * as apiPath from "../../paths/";
import axiosClient from "../../axios";
import { IOrder } from "../../models/Order";
import { EOrderActionTypes } from "../actionTypes/OrderActionTypes";
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
  return async (dispatch: Dispatch | any) => {
    try {
      await axiosClient.post(
        apiPath.orderPaths.createOrder,
        data
      );
      dispatch(getOrderList());
      toast.success(success);
    } catch (error: any) {
      toast.error(err);
    }
  };
};
