import axiosClient from "../../axios";
import * as apiPath from "../../paths/index";
import { ELoadingActionTypes } from "./../actionTypes/LoadingActionTypes";
import { EUserActionTypes } from "../actionTypes/UserActionTypes";
import { IUser } from "../../models/User/IUser";
import { Dispatch } from "redux";
import { ACCESSTOKEN, ACCOUNT } from "../../configs/setting";
import { history } from "../../App";

export const signIn = (user: IUser) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ELoadingActionTypes.OPEN_BUTTON_LOADING,
    });
    setTimeout(async () => {
      try {
        const result = await axiosClient.post(apiPath.userPaths.signIn, user);
        localStorage.setItem(ACCESSTOKEN, result.data.accessToken);
        localStorage.setItem(ACCOUNT, JSON.stringify(result.data.userInfo));
        dispatch({
          type: EUserActionTypes.SIGN_IN,
          payload: result.data.userInfo,
        });
        dispatch({
          type: ELoadingActionTypes.CLOSE_BUTTON_LOADING,
        });
      } catch (error: any) {
        dispatch({
          type: ELoadingActionTypes.CLOSE_BUTTON_LOADING,
        });
      }
    }, 1000);
  };
};

export const signUp = (user: IUser) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ELoadingActionTypes.OPEN_BUTTON_LOADING,
    });
    setTimeout(() => {
      try {
        axiosClient.post(apiPath.userPaths.signUp, user);
        dispatch({
          type: ELoadingActionTypes.CLOSE_BUTTON_LOADING,
        });
        signIn(user);
      } catch (error) {
        console.log(error);
        dispatch({
          type: ELoadingActionTypes.OPEN_BUTTON_LOADING,
        });
      }
    }, 1000);
  };
};
