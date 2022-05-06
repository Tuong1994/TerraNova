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

const token = localStorage.getItem(ACCESSTOKEN) || "";

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
  return (dispatch: Dispatch) => {
    dispatch(actions.openDataLoading);
    setTimeout(async () => {
      try {
        const result = await axiosClient.get(
          apiPath.userPaths.getUserList,
          getListQuery(query as IQueryList)
        );
        dispatch({
          type: EUserActionTypes.GET_USER_LIST,
          payload: result.data,
        });
        dispatch(actions.closeDataLoading);
      } catch (error: any) {
        dispatch(actions.closeDataLoading);
        toast.error(error?.response?.data);
      }
    }, 1000);
  };
};

export const getUserDetail = (query: IQueryList, isAdmin?: boolean) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.userPaths.getUserDetail,
        getListQuery(query as IQueryList)
      );
      if (isAdmin) {
        dispatch({
          type: EUserActionTypes.GET_USER_ADMIN_DETAIL,
          payload: result.data,
        });
      } else {
        dispatch({
          type: EUserActionTypes.GET_USER_DETAIL,
          payload: result.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createUser = (data: any, success?: string, err?: string) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.post(apiPath.userPaths.createUser, data, token);
        dispatch(actions.closeButtonLoading);
        toast.success(success);
      } catch (error) {
        dispatch(actions.closeButtonLoading);
        toast.error(err);
      }
    }, 1000);
  };
};

export const updateUser = (
  query: IQueryList,
  data: any,
  success?: string,
  err?: string
) => {
  return (dispatch: any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.put(
          apiPath.userPaths.updateUser,
          getListQuery(query as IQueryList),
          data,
          token
        );
        dispatch(getUserDetail(query));
        dispatch(actions.closeButtonLoading);
        toast.success(success);
      } catch (error) {
        toast.error(err);
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};

export const removeUser = (
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return async (dispatch: any) => {
    try {
      await axiosClient.delete(
        apiPath.userPaths.removeUser,
        getListQuery(query as IQueryList),
        token
      );
      dispatch(getUserList(query));
      toast.success(success);
    } catch (error) {
      toast.error(err);
    }
  };
};

export const uploadAvatar = (
  query: IQueryList,
  data: any,
  success?: string,
  err?: string
) => {
  return (dispatch: any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.post(
          apiPath.uploadPaths.uploadAvatar,
          data,
          token,
          getListQuery(query as IQueryList)
        );
        dispatch(getUserDetail(query));
        dispatch(actions.closeButtonLoading);
        toast.success(success);
      } catch (error) {
        toast.error(err);
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};

export const changePassword = (data: any, success?: string, err?: string) => {
  return (dispatch: any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.post(apiPath.userPaths.changePassword, data, token);
        toast.success(success);
        setTimeout(() => {
          dispatch(signIn(data));
        }, 500);
      } catch (error: any) {
        if (error.response.status === 403) {
          toast.error(err);
        }
        toast.error(error.response.message);
      }
    }, 1000);
  };
};
