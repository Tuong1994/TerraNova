import { MenuAction } from "./../actions/MenuAction";
import { IMenu } from "./../../interfaces/menu";
import { EMenuActionTypes } from "../actionTypes/MenuActionTypes";
interface IMenuStateDefault {
  menuList: IMenu[];
}

const stateDetault: IMenuStateDefault = {
  menuList: [],
};

export const MenuReducer = (state = stateDetault, action: MenuAction) => {
  switch (action.type) {
    case EMenuActionTypes.GET_MENU_LIST: {
      let newState = { ...state };
      newState.menuList = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
