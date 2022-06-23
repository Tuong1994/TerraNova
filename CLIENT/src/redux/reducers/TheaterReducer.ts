import { ITheater } from "../../models/Theater";
import { TheaterAction } from "../actions/TheaterAction";
import { ETheaterActionTypes } from "../actionTypes/TheaterActionTypes";

interface IStateDefault {
  theaterList: ITheater[];
}

const stateDefault: IStateDefault = {
  theaterList: [],
};

export const TheaterReducer = (state = stateDefault, action: TheaterAction) => {
  switch (action.type) {
    case ETheaterActionTypes.GET_THEATER_LIST: {
      let newState = { ...state };
      newState.theaterList = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
