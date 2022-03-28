import { LangActionTypes } from "../actionTypes/LangActionTypes";

interface CHANGE_ENG {
  type: LangActionTypes.CHANGE_ENG;
  payload?: any;
}

interface CHANGE_VN {
  type: LangActionTypes.CHANGE_VN;
  payload?: any;
}

export type LangAction = CHANGE_ENG | CHANGE_VN;
