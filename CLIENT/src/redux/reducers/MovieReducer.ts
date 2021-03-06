import { IMovie } from "../../models/Movie";
import { MovieAction } from "../actions/MovieAction";
import { EMovieActionTypes } from "../actionTypes/MovieActionTypes";

interface IStateDefault {
  movieId: string;
  movieList: {
    total: number;
    page: number;
    limits: number;
    movies: IMovie[];
  };
  movieDetail: IMovie;
}

const stateDefault: IStateDefault = {
  movieId: "",
  movieList: {
    total: 0,
    page: 0,
    limits: 0,
    movies: [],
  },
  movieDetail: {},
};

export const MovieReducer = (state = stateDefault, action: MovieAction) => {
  switch (action.type) {
    case EMovieActionTypes.ADD_ID: {
      let newState = { ...state };
      newState.movieId = action.payload;
      state = newState;
      return { ...state };
    }
    case EMovieActionTypes.GET_MOVIE_LIST: {
      let newState = { ...state };
      newState.movieList = action.payload;
      state = newState;
      return { ...state };
    }
    case EMovieActionTypes.GET_MOVIE_DETAIL: {
      let newState = { ...state };
      newState.movieDetail = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
