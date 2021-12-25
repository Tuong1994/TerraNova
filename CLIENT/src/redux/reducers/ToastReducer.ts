import { ToastAction } from "../actions/ToastAction";
import { EToastActionTypes } from "../actionTypes/ToastActionTypes";

interface IToastStateDefault {
  show: boolean;
  success: {
    active: boolean;
    message: any;
  };
  error: {
    active: boolean;
    message: any;
  };
}

const stateDefault: IToastStateDefault = {
  show: false,
  success: {
    active: false,
    message: "",
  },
  error: {
    active: false,
    message: "",
  },
};

export const ToastReducer = (state = stateDefault, action: ToastAction) => {
  switch (action.type) {
    case EToastActionTypes.SHOW_TOAST: {
      let newState = { ...state };
      newState.show = true;
      state = newState;
      return { ...state };
    }
    case EToastActionTypes.CLOSE_TOAST: {
      let newState = { ...state };
      newState.show = false;
      state = newState;
      return { ...state };
    }
    case EToastActionTypes.SUCCESS: {
      let newState = { ...state.success };
      newState.active = true;
      newState.message = action.payload;
      state.success = newState;
      return { ...state };
    }
    case EToastActionTypes.ERROR: {
      let newState = { ...state.error };
      newState.active = true;
      newState.message = action.payload;
      state.error = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
