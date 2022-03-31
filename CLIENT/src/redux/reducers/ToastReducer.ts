import { EToastType } from "../../interfaces/toast";
import { ToastAction } from "./../actions/ToastAction";
import { EToastActionType } from "./../actionTypes/ToastActionTypes";

interface IStateDefault {
  toast: {
    title?: string;
    type?: number;
  };
}

const stateDefault: IStateDefault = {
  toast: {},
};

export const ToastReducer = (state = stateDefault, action: ToastAction) => {
  switch (action.type) {
    case EToastActionType.SUCCESS: {
      let newToast = { ...state.toast };
      newToast.title = action.payload.title;
      newToast.type = action.payload.type || EToastType.success;
      state.toast = newToast;
      return { ...state };
    }
    case EToastActionType.ERROR: {
      let newToast = { ...state.toast };
      newToast.title = action.payload.title;
      newToast.type = action.payload.type || EToastType.error;
      state.toast = newToast;
      return { ...state };
    }
    case EToastActionType.REMOVE: {
      let newToast = { ...state.toast };
      newToast = {};
      state.toast = newToast;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
