import { EMovieScheduleActionTypes } from "../actionTypes/MovieScheduleActionTypes";

interface GET_MOVIE_SCHEDULE_DETAIL {
  type: EMovieScheduleActionTypes.GET_MOVIE_SCHEDULE_DETAIL;
  payload: any;
}

export type MovieScheduleAction = GET_MOVIE_SCHEDULE_DETAIL;
