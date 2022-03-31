import { EToastActionType } from "./../actionTypes/ToastActionTypes";

interface SUCCESS {
  type: EToastActionType.SUCCESS;
  payload?: any;
}

interface ERROR {
  type: EToastActionType.ERROR;
  payload?: any;
}

interface REMOVE {
  type: EToastActionType.REMOVE;
}

export type ToastAction = SUCCESS | ERROR | REMOVE;
