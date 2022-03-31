import axiosClient from "../../axios";
import * as apiPath from "../../paths/index";
import { EUserActionTypes } from "../actionTypes/UserActionTypes";
import { IUser } from "../../models/User";
import { Dispatch } from "redux";
import { ACCESSTOKEN, ACCOUNT } from "../../configs/setting";
import actions from "../../configs/actions";

export const signIn = (user: IUser) => {
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
        dispatch(actions.closeButtonLoading);
      } catch (error: any) {
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};

export const signUp = (user: IUser) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.openButtonLoading);
    setTimeout(() => {
      try {
        axiosClient.post(apiPath.userPaths.signUp, user);
        dispatch(actions.closeButtonLoading);
        signIn(user);
      } catch (error) {
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};
