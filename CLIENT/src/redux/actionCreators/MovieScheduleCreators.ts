import * as apiPath from "../../paths";
import axiosClient from "../../axios";
import actions from "../../configs/actions";
import { IQueryList } from "../../interfaces/query";
import { Dispatch } from "redux";
import { ACCESSTOKEN, getListQuery } from "../../configs/setting";
import { EMovieScheduleActionTypes } from "../actionTypes/MovieScheduleActionTypes";
import { IMovieSchedule } from "../../models/MovieSchedule";
import { toast } from "react-toastify";

const token = localStorage.getItem(ACCESSTOKEN) || "";

export const getMovieScheduleList = (query: IQueryList) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.openDataLoading);
    setTimeout(async () => {
      try {
        const result = await axiosClient.get(
          apiPath.movieSchedulePaths.getMovieScheduleList,
          getListQuery(query as IQueryList)
        );
        dispatch({
          type: EMovieScheduleActionTypes.GET_MOVIE_SCHEDULE_LIST,
          payload: result.data,
        });
        dispatch(actions.closeDataLoading);
      } catch (error) {
        console.log(error);
        dispatch(actions.closeDataLoading);
      }
    }, 1000);
  };
};

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

export const createMovieSchedule = (
  data: IMovieSchedule,
  success?: string,
  err?: string
) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.post(
          apiPath.movieSchedulePaths.createMovieSchedule,
          data,
          token
        );
        dispatch(actions.closeButtonLoading);
        toast.success(success);
      } catch (error) {
        dispatch(actions.closeButtonLoading);
        toast.error(err);
      }
    }, 1000);
  };
};

export const removeMovieSchedule = (
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return async (dispatch: any) => {
    try {
      await axiosClient.delete(
        apiPath.movieSchedulePaths.removeMovieSchedule,
        getListQuery(query as IQueryList),
        token
      );
      dispatch(getMovieScheduleList(query));
      toast.success(success);
    } catch (error) {
      toast.error(err);
    }
  };
};
