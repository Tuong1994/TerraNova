import * as apiPath from "../../paths";
import { ITicket } from "../../models/Ticket";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { ACCESSTOKEN } from "../../configs/setting";
import axiosClient from "../../axios";
import actions from "../../configs/actions";

const token = localStorage.getItem(ACCESSTOKEN) || "";

export const bookTicket = (data: ITicket, success?: string, err?: string) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.post(apiPath.ticketPaths.bookTicket, data, token);
        toast.success(success);
        dispatch(actions.closeButtonLoading);
      } catch (error) {
        toast.error(err);
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};
