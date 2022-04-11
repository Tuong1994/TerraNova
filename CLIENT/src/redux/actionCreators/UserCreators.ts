import * as apiPath from "../../paths/index";
import { getListQuery } from "./../../configs/setting";
import { IQueryList } from "./../../interfaces/query";
import { EUserActionTypes } from "../actionTypes/UserActionTypes";
import { IUser } from "../../models/User";
import { Dispatch } from "redux";
import { ACCESSTOKEN, ACCOUNT } from "../../configs/setting";
import { toast } from "react-toastify";
import { history } from "../../App";
import axiosClient from "../../axios";
import actions from "../../configs/actions";

export const signIn = (user: IUser, success?: string, err?: string) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        const result = await axiosClient.post(apiPath.userPaths.signIn, user);
        localStorage.setItem(ACCESSTOKEN, result.data.accessToken);
        localStorage.setItem(ACCOUNT, JSON.stringify(result.data.userInfo));
        dispatch({
          type: EUserActionTypes.SIGN_IN,
          payload: result.data.userInfo,
        });
        toast.success(success);
        dispatch(actions.closeButtonLoading);
        history.push("/");
      } catch (error: any) {
        toast.error(err);
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};

export const signUp = (user: IUser, success?: string, err?: string) => {
  return (dispatch: Dispatch | any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.post(apiPath.userPaths.signUp, user);
        toast.success(success);
        dispatch(signIn(user));
        dispatch(actions.closeButtonLoading);
      } catch (error: any) {
        toast.error(err);
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};

export const getUserList = (query: IQueryList) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.userPaths.getUserList,
        getListQuery(query as IQueryList)
      );
      dispatch({
        type: EUserActionTypes.GET_USER_LIST,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserDetail = (query: IQueryList) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.userPaths.getUserDetail,
        getListQuery(query as IQueryList)
      );
      dispatch({
        type: EUserActionTypes.GET_USER_DETAIL,
        payload: result.data,
      })
    } catch (error) {
      console.log(error);
    }
  };
};
