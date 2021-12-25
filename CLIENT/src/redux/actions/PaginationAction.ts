import { EPaginationActionTypes } from "../actionTypes/PaginationActionTypes";

interface CHANGE_PAGE {
  type: EPaginationActionTypes.CHANGE_PAGE;
  payload: any
}

export type PaginationAction = CHANGE_PAGE;
