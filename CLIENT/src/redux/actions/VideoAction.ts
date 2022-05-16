import { EVideoActionTypes } from "../actionTypes/VideoActionTypes";

interface ADD_LINK {
  type: EVideoActionTypes.ADD_LINK;
  payload: any;
}

export type VideoAction = ADD_LINK;
