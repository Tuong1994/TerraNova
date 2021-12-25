import { PaginationAction } from "../actions/PaginationAction";
import { EPaginationActionTypes } from "../actionTypes/PaginationActionTypes";

const stateDefault = {
  page: 1,
};

export const PaginationReducer = (
  state = stateDefault,
  action: PaginationAction
) => {
  switch (action.type) {
    case EPaginationActionTypes.CHANGE_PAGE: {
      let newPage = { ...state };
      newPage.page = action.payload;
      state = newPage;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
