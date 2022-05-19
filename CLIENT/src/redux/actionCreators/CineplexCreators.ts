import * as apiPath from "../../paths";
import axiosClient from "../../axios";
import actions from "../../configs/actions";
import { ECineplexActionTypes } from "../../redux/actionTypes/CinplexActionTypes";
import { getListQuery } from "../../configs/setting";
import { IQueryList } from "../../interfaces/query";
import { Dispatch } from "redux";

export const getCineplexList = (query: IQueryList) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.openDataLoading);
    setTimeout(async () => {
      try {
        const result = await axiosClient.get(
          apiPath.cineplexPaths.getCineplexList,
          getListQuery(query as IQueryList)
        );
        dispatch({
          type: ECineplexActionTypes.GET_CINEPLEX_WITH_CINEMA_AND_MOVIE,
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

export const getCineplexDetail = (query: IQueryList) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.openDataLoading);
    setTimeout(async () => {
      try {
        const result = await axiosClient.get(
          apiPath.cineplexPaths.getCineplexDetail,
          getListQuery(query as IQueryList)
        );
        dispatch({
          type: ECineplexActionTypes.GET_CINEPLEX_DETAIL,
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
