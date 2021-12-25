import { EMenuActionTypes } from "./../actionTypes/MenuActionTypes";

interface GET_MENU_LIST {
  type: EMenuActionTypes.GET_MENU_LIST;
  payload?: any;
}

export type MenuAction = GET_MENU_LIST;
