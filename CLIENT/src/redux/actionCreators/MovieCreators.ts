import * as apiPath from "../../paths";
import { IQueryList } from "../../interfaces/query";
import { getListQuery } from "../../configs/setting";
import { EMovieActionTypes } from "../actionTypes/MovieActionTypes";
import { Dispatch } from "redux";
import axiosClient from "../../axios";
import actions from "../../configs/actions";

export const getMovieList = (query: IQueryList) => {
  return (dispatch: any) => {
    dispatch(actions.openDataLoading);
    setTimeout(async () => {
      try {
        const result = await axiosClient.get(
          apiPath.moviePaths.getMovieList,
          getListQuery(query as IQueryList)
        );
        dispatch({
          type: EMovieActionTypes.GET_MOVIE_LIST,
          payload: result.data,
        });
        dispatch(actions.closeDataLoading);
      } catch (error) {
        dispatch(actions.closeButtonLoading);
        console.log(error);
      }
    }, 1000);
  };
};

export const getMovieDetail = (query: IQueryList) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.moviePaths.getMovieDetail,
        getListQuery(query as IQueryList)
      );
      dispatch({
        type: EMovieActionTypes.GET_MOVIE_DETAIL,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
