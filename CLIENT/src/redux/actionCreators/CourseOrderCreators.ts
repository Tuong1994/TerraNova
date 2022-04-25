import * as apiPath from "../../paths";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { ICourseOrder } from "../../models/CourseOrder";
import { ECourseOrderActionTypes } from "../actionTypes/CourseOrderActionTypes";
import { ACCESSTOKEN } from "../../configs/setting";
import { EModalActionTypes } from "../actionTypes/ModalActionTypes";
import actions from "../../configs/actions";
import axiosClient from "../../axios";

export const createCourseOrder = (
  data: ICourseOrder,
  success?: string,
  err?: string
) => {
  return (dispatch: Dispatch) => {
    const token = localStorage.getItem(ACCESSTOKEN) || "";
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        const result = await axiosClient.post(
          apiPath.courseOrderPaths.createCourseOrder,
          data,
          token
        );
        dispatch({
          type: ECourseOrderActionTypes.CREATE_COURSE_ORDER,
          payload: result.data,
        });
        dispatch({
          type: EModalActionTypes.OPEN_REGISTER_MODAL,
        });
        dispatch(actions.closeButtonLoading);
        toast.success(success);
      } catch (error: any) {
        if (error.response.status === 404) {
          toast.error(err);
        }
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};
