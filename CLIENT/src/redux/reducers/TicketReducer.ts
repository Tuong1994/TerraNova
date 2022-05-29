import { TicketAction } from "./../actions/TicketAction";
import { ISeat } from "../../models/Seat";
import { ETicketActionTypes } from "../actionTypes/TicketActionTypes";

interface IStateDefault {
  listBookedSeat: ISeat[];
}

const stateDefault: IStateDefault = {
  listBookedSeat: [],
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
    default:
      return { ...state };
  }
};
