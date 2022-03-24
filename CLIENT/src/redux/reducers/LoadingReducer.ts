import { LoadingAction } from "../actions/LoadingAction";
import { ELoadingActionTypes } from "../actionTypes/LoadingActionTypes";

interface StateLoadingDefault {
  buttonLoading: boolean;
  pageLoading: boolean;
  dataLoading: boolean;
}

const stateDefault: StateLoadingDefault = {
  buttonLoading: false,
  pageLoading: false,
  dataLoading: false,
};

export const LoadingReducer = (state = stateDefault, action: LoadingAction) => {
  switch (action.type) {
    case ELoadingActionTypes.OPEN_BUTTON_LOADING: {
      let newState = { ...state };
      newState.buttonLoading = true;
      state = newState;
      return { ...state };
    }
    case ELoadingActionTypes.CLOSE_BUTTON_LOADING: {
      let newState = { ...state };
      newState.buttonLoading = false;
      state = newState;
      return { ...state };
    }
    case ELoadingActionTypes.OPEN_PAGE_LOADING: {
      let newState = { ...state };
      newState.pageLoading = true;
      state = newState;
      return { ...state };
    }
    case ELoadingActionTypes.CLOSE_PAGE_LOADING: {
      let newState = { ...state };
      newState.pageLoading = false;
      state = newState;
      return { ...state };
    }
    case ELoadingActionTypes.OPEN_DATA_LOADING: {
      let newState = { ...state };
      newState.dataLoading = true;
      state = newState;
      return { ...state };
    }
    case ELoadingActionTypes.CLOSE_DATA_LOADING: {
      let newState = { ...state };
      newState.dataLoading = false;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
