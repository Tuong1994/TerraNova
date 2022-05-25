import * as apiPath from "../../paths";
import axiosClient from "../../axios";
import { IQueryList } from "../../interfaces/query";
import { Dispatch } from "redux";
import { getListQuery } from "../../configs/setting";
import { EMovieScheduleActionTypes } from "../actionTypes/MovieScheduleActionTypes";

export const getMovieScheduleDetail = (query: IQueryList) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.movieSchedulePaths.getMovieScheduleDetail,
        getListQuery(query as IQueryList)
      );
      dispatch({
        type: EMovieScheduleActionTypes.GET_MOVIE_SCHEDULE_DETAIL,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
