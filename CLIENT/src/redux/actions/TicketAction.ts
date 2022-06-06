import { ETicketActionTypes } from "./../actionTypes/TicketActionTypes";

interface ADD_SEAT {
  type: ETicketActionTypes.ADD_SEAT;
  payload: any;
}

interface BOOK_TICKET {
  type: ETicketActionTypes.BOOK_TICKET;
  payload: any;
}

export type TicketAction = ADD_SEAT | BOOK_TICKET;
