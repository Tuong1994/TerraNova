import { EMenuActionTypes } from './../actionTypes/MenuActionTypes';
import { Dispatch } from "redux";
import axiosClient from "../../axios/axiosClient";
import * as apiPath from "../../paths/index";

export const getMenuList = () => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(apiPath.menuPaths.getMenuList);
      dispatch({
        type: EMenuActionTypes.GET_MENU_LIST,
        payload: result.data,
      })
    } catch (error) {
      console.log(error);
    }
  };
};
