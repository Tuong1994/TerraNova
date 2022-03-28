import { LangActionTypes } from "./../actionTypes/LangActionTypes";
import { LangAction } from "../actions/LangAction";

interface ILangStateDefault {
  lang: string;
}

const stateDefault: ILangStateDefault = {
  lang: "",
};

export const LangReducer = (state = stateDefault, action: LangAction) => {
  switch (action.type) {
    case LangActionTypes.CHANGE_ENG: {
      let newState = { ...state };
      newState.lang = action.payload;
      state = newState;
      return { ...state };
    }
    case LangActionTypes.CHANGE_VN: {
      let newState = { ...state };
      newState.lang = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
