import {
  IMovieSchedule,
  IMovieScheduleDetail,
} from "../../models/MovieSchedule";
import { MovieScheduleAction } from "../actions/MovieScheduleAction";
import { EMovieScheduleActionTypes } from "../actionTypes/MovieScheduleActionTypes";

interface IStateDefault {
  movieScheduleList: {
    total: number;
    page: number;
    limits: number;
    schedules: IMovieSchedule[];
  };
  movieScheduleDetail: IMovieScheduleDetail;
}

const stateDefault: IStateDefault = {
  movieScheduleList: {
    total: 0,
    page: 1,
    limits: 10,
    schedules: [],
  },
  movieScheduleDetail: {},
};

export const MovieScheduleReducer = (
  state = stateDefault,
  action: MovieScheduleAction
) => {
  switch (action.type) {
    case EMovieScheduleActionTypes.GET_MOVIE_SCHEDULE_LIST: {
      let newState = { ...state };
      newState.movieScheduleList = action.payload;
      state = newState;
      return { ...state };
    }
    case EMovieScheduleActionTypes.GET_MOVIE_SCHEDULE_DETAIL: {
      let newState = { ...state };
      newState.movieScheduleDetail = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
