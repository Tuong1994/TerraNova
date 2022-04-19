import { ELangActionTypes } from "../actionTypes/LangActionTypes";

interface CHANGE_ENG {
  type: ELangActionTypes.CHANGE_ENG;
  payload?: any;
}

interface CHANGE_VN {
  type: ELangActionTypes.CHANGE_VN;
  payload?: any;
}

interface CHANGE_CH {
  type: ELangActionTypes.CHANGE_CH;
  payload?: any;
}

export type LangAction = CHANGE_ENG | CHANGE_VN | CHANGE_CH;
