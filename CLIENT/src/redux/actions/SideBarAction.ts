import { ESideBarActionTypes } from "../actionTypes/SideBarActionTypes";

interface ADD_ID {
    type: ESideBarActionTypes.ADD_ID,
    payload?: any;
}

export type SideBarAction = ADD_ID;