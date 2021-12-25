import { ModalAction } from "../actions/ModalAction";
import { EModalActionTypes } from "../actionTypes/ModalActionTypes";

interface IModalStateDefault {
  isShowing: boolean;
}

const stateDefault: IModalStateDefault = {
  isShowing: false,
};

export const ModalReducer = (state = stateDefault, action: ModalAction) => {
  switch (action.type) {
    case EModalActionTypes.OPEN_MODAL: {
      let newState = { ...state };
      newState.isShowing = true;
      state = newState;
      return { ...state };
    }
    case EModalActionTypes.CLOSE_MODAL: {
      let newState = { ...state };
      newState.isShowing = false;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
