import { EUserActionTypes } from "../actionTypes/UserActionTypes";

interface CONSULTATION {
  type: EUserActionTypes.CONSULTATION;
  payload: any;
}
interface SIGN_IN {
  type: EUserActionTypes.SIGN_IN;
  payload: any;
}
interface SIGN_UP {
  type: EUserActionTypes.SIGN_UP;
  payload: any;
}

interface LOG_OUT {
  type: EUserActionTypes.LOG_OUT;
}

interface GET_USER_LIST {
  type: EUserActionTypes.GET_USER_LIST;
  payload?: any;
}

interface GET_USER_DETAIL {
  type: EUserActionTypes.GET_USER_DETAIL;
  payload?: any;
}

export type UserAction =
  | CONSULTATION
  | SIGN_IN
  | SIGN_UP
  | LOG_OUT
  | GET_USER_LIST
  | GET_USER_DETAIL;
