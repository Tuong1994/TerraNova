import { ELoadingActionTypes } from "../redux/actionTypes/LoadingActionTypes";
import { EModalActionTypes } from "../redux/actionTypes/ModalActionTypes";

const actions = {
  openButtonLoading: {
    type: ELoadingActionTypes.OPEN_BUTTON_LOADING,
  },
  closeButtonLoading: {
    type: ELoadingActionTypes.CLOSE_BUTTON_LOADING,
  },
  openDataLoading: {
    type: ELoadingActionTypes.OPEN_DATA_LOADING,
  },
  closeDataLoading: {
    type: ELoadingActionTypes.CLOSE_DATA_LOADING,
  },
};

export default actions;
