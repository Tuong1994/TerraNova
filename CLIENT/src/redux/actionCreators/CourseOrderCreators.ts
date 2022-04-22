import * as apiPath from "../../paths";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { ICourseOrder } from "../../models/CourseOrder";
import actions from "../../configs/actions";
import axiosClient from "../../axios";

export const createCourseOrder = (
  data: ICourseOrder,
  success?: string,
  err?: string
) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.post(
          apiPath.courseOrderPaths.createCourseOrder,
          data
        );
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
