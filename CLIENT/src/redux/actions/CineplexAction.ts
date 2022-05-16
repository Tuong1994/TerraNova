import { ECineplexActionTypes } from "../actionTypes/CinplexActionTypes";

interface GET_CINEPLEX_WITH_CINEMA_AND_MOVIE {
    type: ECineplexActionTypes.GET_CINEPLEX_WITH_CINEMA_AND_MOVIE,
    payload: any
}

export type CineplexAction = GET_CINEPLEX_WITH_CINEMA_AND_MOVIE;