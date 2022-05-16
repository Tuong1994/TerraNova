import { IMovie } from "../../models/Movie";
import { CinemaAction } from "../actions/CinemaAction";
import { ECinemaActionTypes } from "../actionTypes/CinemaActionTypes";

interface IStateDefault {
  cinemaWithMovie: {
    total: number;
    page: number;
    limits: number;
    movies: IMovie[];
  };
}

const stateDefault: IStateDefault = {
  cinemaWithMovie: {
    total: 0,
    page: 0,
    limits: 0,
    movies: [],
  },
};

export const CinemaReducer = (state = stateDefault, action: CinemaAction) => {
  switch (action.type) {
    case ECinemaActionTypes.GET_CINEMA_AND_MOVIE: {
      let newState = { ...state };
      newState.cinemaWithMovie = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
