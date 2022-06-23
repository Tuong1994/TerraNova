import { ETheaterActionTypes } from "../actionTypes/TheaterActionTypes";

interface GET_THEATER_LIST {
  type: ETheaterActionTypes.GET_THEATER_LIST;
  payload: any;
}

export type TheaterAction = GET_THEATER_LIST;
