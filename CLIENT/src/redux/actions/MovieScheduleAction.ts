import { EMovieScheduleActionTypes } from "../actionTypes/MovieScheduleActionTypes";

interface GET_MOVIE_SCHEDULE_LIST {
  type: EMovieScheduleActionTypes.GET_MOVIE_SCHEDULE_LIST;
  payload: any;
}
interface GET_MOVIE_SCHEDULE_DETAIL {
  type: EMovieScheduleActionTypes.GET_MOVIE_SCHEDULE_DETAIL;
  payload: any;
}

export type MovieScheduleAction =
  | GET_MOVIE_SCHEDULE_LIST
  | GET_MOVIE_SCHEDULE_DETAIL;
