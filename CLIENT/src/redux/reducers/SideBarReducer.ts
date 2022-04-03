import { SideBarAction } from "./../actions/SideBarAction";
import { ESideBarActionTypes } from "../actionTypes/SideBarActionTypes";

interface IStateDefault {
  menuId: string;
}

const stateDefault: IStateDefault = {
  menuId: "admin",
};

export const SideBarReducer = (state = stateDefault, action: SideBarAction) => {
  switch (action.type) {
    case ESideBarActionTypes.ADD_ID: {
      let newState = { ...state };
      newState.menuId = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
