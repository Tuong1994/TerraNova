import { ECineplexActionTypes } from "../actionTypes/CinplexActionTypes";

interface GET_CINEPLEX_WITH_CINEMA_AND_MOVIE {
    type: ECineplexActionTypes.GET_CINEPLEX_WITH_CINEMA_AND_MOVIE,
    payload: any
}

interface GET_CINEPLEX_DETAIL {
    type:  ECineplexActionTypes.GET_CINEPLEX_DETAIL,
    payload: any;
}

export type CineplexAction = GET_CINEPLEX_WITH_CINEMA_AND_MOVIE | GET_CINEPLEX_DETAIL;