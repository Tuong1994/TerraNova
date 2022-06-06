import * as apiPath from "../../paths";
import { ITicket } from "../../models/Ticket";
import { ACCESSTOKEN } from "../../configs/setting";
import { getMovieScheduleDetail } from "./MovieScheduleCreators";
import { IQueryList } from "../../interfaces/query";
import { ETicketActionTypes } from "../actionTypes/TicketActionTypes";
import { EModalActionTypes } from "../actionTypes/ModalActionTypes";
import { toast } from "react-toastify";
import axiosClient from "../../axios";
import actions from "../../configs/actions";

const token = localStorage.getItem(ACCESSTOKEN) || "";

export const bookTicket = (
  data: ITicket,
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return (dispatch: any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        const result = await axiosClient.post(
          apiPath.ticketPaths.bookTicket,
          data,
          token
        );
        dispatch({
          type: ETicketActionTypes.BOOK_TICKET,
          payload: result.data,
        });
        dispatch(getMovieScheduleDetail(query));
        dispatch(actions.closeButtonLoading);
        dispatch({
          type: EModalActionTypes.OPEN_BOOKING_TICKET_MODAL
        })
        toast.success(success);
      } catch (error) {
        toast.error(err);
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};
