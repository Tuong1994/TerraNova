import { ELangActionTypes } from "./../actionTypes/LangActionTypes";
import { LangAction } from "../actions/LangAction";

interface ILangStateDefault {
  lang: string;
}

const stateDefault: ILangStateDefault = {
  lang: "ENG",
};

export const LangReducer = (state = stateDefault, action: LangAction) => {
  switch (action.type) {
    case ELangActionTypes.CHANGE_ENG: {
      let newState = { ...state };
      newState.lang = action.payload;
      state = newState;
      return { ...state };
    }
    case ELangActionTypes.CHANGE_VN: {
      let newState = { ...state };
      newState.lang = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
