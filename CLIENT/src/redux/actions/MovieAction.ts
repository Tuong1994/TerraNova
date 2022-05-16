import { EMovieActionTypes } from "../actionTypes/MovieActionTypes";

interface GET_MOVIE_LIST {
  type: EMovieActionTypes.GET_MOVIE_LIST;
  payload: any;
}

interface GET_MOVIE_DETAIL {
  type: EMovieActionTypes.GET_MOVIE_DETAIL;
  payload: any;
}

export type MovieAction = GET_MOVIE_LIST | GET_MOVIE_DETAIL;
