import { IMovieScheduleDetail } from "../../models/MovieSchedule";
import { MovieScheduleAction } from "../actions/MovieScheduleAction";
import { EMovieScheduleActionTypes } from "../actionTypes/MovieScheduleActionTypes";

interface IStateDefault {
  movieScheduleDetail: IMovieScheduleDetail;
}

const stateDefault: IStateDefault = {
  movieScheduleDetail: {},
};

export const MovieScheduleReducer = (
  state = stateDefault,
  action: MovieScheduleAction
) => {
  switch (action.type) {
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
