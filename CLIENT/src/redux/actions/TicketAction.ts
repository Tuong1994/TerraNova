import { ETicketActionTypes } from "./../actionTypes/TicketActionTypes";

interface ADD_SEAT {
  type: ETicketActionTypes.ADD_SEAT;
  payload: any;
}

export type TicketAction = ADD_SEAT;
