import { LoadingAction } from "../actions/LoadingAction";
import { ELoadingActionTypes } from "../actionTypes/LoadingActionTypes";

interface StateLoadingDefault {
  isLoading: boolean;
}

const stateDefault: StateLoadingDefault = {
  isLoading: false,
};

export const LoadingReducer = (state = stateDefault, action: LoadingAction) => {
  switch (action.type) {
    case ELoadingActionTypes.OPEN_BUTTON_LOADING: {
      let newIsLoading = { ...state };
      newIsLoading.isLoading = true;
      state = newIsLoading;
      return { ...state };
    }
    case ELoadingActionTypes.CLOSE_BUTTON_LOADING: {
      let newIsLoading = { ...state };
      newIsLoading.isLoading = false;
      state = newIsLoading;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
