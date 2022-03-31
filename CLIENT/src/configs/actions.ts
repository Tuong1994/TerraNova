import { ELoadingActionTypes } from "../redux/actionTypes/LoadingActionTypes";

const actions = {
  openButtonLoading: {
    type: ELoadingActionTypes.OPEN_BUTTON_LOADING,
  },
  closeButtonLoading: {
    type: ELoadingActionTypes.CLOSE_BUTTON_LOADING,
  },
};

export default actions;
