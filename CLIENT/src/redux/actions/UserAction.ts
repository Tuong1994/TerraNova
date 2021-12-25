import { EUserActionTypes } from "../actionTypes/UserActionTypes";

interface CONSULTATION {
  type: EUserActionTypes.CONSULTATION;
  payload?: any;
}
interface SIGN_IN {
  type: EUserActionTypes.SIGN_IN;
  payload?: any;
}
interface SIGN_UP {
  type: EUserActionTypes.SIGN_UP;
  payload?: any;
}

interface LOG_OUT {
  type: EUserActionTypes.LOG_OUT;
}

export type UserAction = CONSULTATION | SIGN_IN | SIGN_UP | LOG_OUT;
