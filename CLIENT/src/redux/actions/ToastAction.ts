import { EToastActionTypes } from "../actionTypes/ToastActionTypes";

interface SHOW_TOAST {
  type: EToastActionTypes.SHOW_TOAST;
}

interface CLOSE_TOAST {
  type: EToastActionTypes.CLOSE_TOAST;
}
interface SUCCESS {
  type: EToastActionTypes.SUCCESS;
  payload?: any;
}

interface ERROR {
  type: EToastActionTypes.ERROR;
  payload?: any;
}

export type ToastAction = SHOW_TOAST | CLOSE_TOAST | SUCCESS | ERROR;
