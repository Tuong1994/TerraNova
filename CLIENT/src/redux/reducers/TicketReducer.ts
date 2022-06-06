import { ISeat } from "../../models/Seat";
import { TicketAction } from "./../actions/TicketAction";
import { ETicketActionTypes } from "../actionTypes/TicketActionTypes";
import { ITicket } from "../../models/Ticket";

interface IStateDefault {
  listBookedSeat: ISeat[];
  ticket: ITicket;
}

const stateDefault: IStateDefault = {
  listBookedSeat: [],
  ticket: {},
};

export const TicketReducer = (state = stateDefault, action: TicketAction) => {
  switch (action.type) {
    case ETicketActionTypes.ADD_SEAT: {
      let newState = { ...state };
      const index = newState.listBookedSeat.findIndex(
        (i) => i.id === action.payload.id
      );
      if (index !== -1) {
        newState.listBookedSeat.splice(index, 1);
      } else {
        newState.listBookedSeat.push(action.payload);
      }
      state = newState;
      return { ...state };
    }
    case ETicketActionTypes.BOOK_TICKET: {
      let newState = { ...state };
      newState.ticket = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
