import * as apiPath from "../../paths/index";
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
        history.push("/")
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
    setTimeout(() => {
      try {
        axiosClient.post(apiPath.userPaths.signUp, user);
        toast.success(success);
        dispatch(signIn(user))
        dispatch(actions.closeButtonLoading);
      } catch (error: any) {
        toast.error(err);
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};
