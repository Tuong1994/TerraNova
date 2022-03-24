import { ELoadingActionTypes } from "./../actionTypes/LoadingActionTypes";

interface OPEN_BUTTON_LOADING {
  type: ELoadingActionTypes.OPEN_BUTTON_LOADING;
}
interface CLOSE_BUTTON_LOADING {
  type: ELoadingActionTypes.CLOSE_BUTTON_LOADING;
}
interface OPEN_PAGE_LOADING {
  type: ELoadingActionTypes.OPEN_PAGE_LOADING;
}
interface CLOSE_PAGE_LOADING {
  type: ELoadingActionTypes.CLOSE_PAGE_LOADING;
}
interface OPEN_DATA_LOADING {
  type: ELoadingActionTypes.OPEN_DATA_LOADING;
}
interface CLOSE_DATA_LOADING {
  type: ELoadingActionTypes.CLOSE_DATA_LOADING;
}

export type LoadingAction =
  | OPEN_BUTTON_LOADING
  | CLOSE_BUTTON_LOADING
  | OPEN_PAGE_LOADING
  | CLOSE_PAGE_LOADING
  | OPEN_DATA_LOADING
  | CLOSE_DATA_LOADING;
