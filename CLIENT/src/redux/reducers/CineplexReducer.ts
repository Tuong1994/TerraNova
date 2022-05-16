import { ICineplex } from "../../models/Cineplex";
import { CineplexAction } from "../actions/CineplexAction";
import { ECineplexActionTypes } from "../actionTypes/CinplexActionTypes";

interface IStateDefault {
  cineplexWithCinemaAndMovie: {
    total: number;
    page: number;
    limits: number;
    cineplexes: ICineplex[];
  };
}

const stateDefault: IStateDefault = {
  cineplexWithCinemaAndMovie: {
    total: 0,
    page: 0,
    limits: 0,
    cineplexes: [],
  },
};

export const CineplexReducer = (
  state = stateDefault,
  action: CineplexAction
) => {
  switch (action.type) {
    case ECineplexActionTypes.GET_CINEPLEX_WITH_CINEMA_AND_MOVIE: {
      let newState = { ...state };
      newState.cineplexWithCinemaAndMovie = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
