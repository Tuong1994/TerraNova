import axiosClient from "../../axios/axiosClient";
import * as apiPath from "../../paths/index";
import { EToastActionTypes } from "../actionTypes/ToastActionTypes";
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
        dispatch({
          type: EToastActionTypes.SHOW_TOAST,
        });
        dispatch({
          type: EToastActionTypes.SUCCESS,
          payload: "Sign in success",
        });
        setTimeout(() => {
          history.push("/");
          dispatch({
            type: EToastActionTypes.CLOSE_TOAST,
          });
        }, 2000);
      } catch (error: any) {
        dispatch({
          type: ELoadingActionTypes.CLOSE_BUTTON_LOADING,
        });
        dispatch({
          type: EToastActionTypes.SHOW_TOAST,
        });
        dispatch({
          type: EToastActionTypes.ERROR,
          payload: error.response.data,
        });
        setTimeout(() => {
          dispatch({
            type: EToastActionTypes.CLOSE_TOAST,
          });
        }, 2000);
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
