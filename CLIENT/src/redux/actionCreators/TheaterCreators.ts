import * as apiPath from "../../paths";
import axiosClient from "../../axios";
import { Dispatch } from "redux";
import { ETheaterActionTypes } from "../actionTypes/TheaterActionTypes";

export const getTheaterList = () => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(apiPath.theaterPaths.getTheaterList);
      dispatch({
        type: ETheaterActionTypes.GET_THEATER_LIST,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
