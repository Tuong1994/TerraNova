import { ECinemaActionTypes } from "../actionTypes/CinemaActionTypes";

interface GET_CINEMA_AND_MOVIE {
  type: ECinemaActionTypes.GET_CINEMA_AND_MOVIE;
  payload: any;
}

export type CinemaAction = GET_CINEMA_AND_MOVIE;
