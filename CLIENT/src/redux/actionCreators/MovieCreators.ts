import * as apiPath from "../../paths";
import { IQueryList } from "../../interfaces/query";
import { ACCESSTOKEN, getListQuery } from "../../configs/setting";
import { EMovieActionTypes } from "../actionTypes/MovieActionTypes";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import axiosClient from "../../axios";
import actions from "../../configs/actions";

const token = localStorage.getItem(ACCESSTOKEN) || "";

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

export const createMovie = (data: any, success?: string, err?: string) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.post(apiPath.moviePaths.createMovie, data, token);
        dispatch(actions.closeButtonLoading);
        toast.success(success);
      } catch (error) {
        dispatch(actions.closeButtonLoading);
        toast.error(err);
      }
    }, 1000);
  };
};

export const updateMovie = (
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
          apiPath.moviePaths.updateMovie,
          getListQuery(query as IQueryList),
          data,
          token
        );
        dispatch(getMovieDetail(query));
        dispatch(actions.closeButtonLoading);
        toast.success(success);
      } catch (error) {
        dispatch(actions.closeButtonLoading);
        toast.error(err);
      }
    }, 1000);
  };
};

export const removeMovie = (
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return async (dispatch: any) => {
    try {
      await axiosClient.delete(
        apiPath.moviePaths.removeMovie,
        getListQuery(query as IQueryList),
        token
      );
      dispatch(getMovieList(query));
      toast.success(success);
    } catch (error) {
      toast.error(err);
    }
  };
};
