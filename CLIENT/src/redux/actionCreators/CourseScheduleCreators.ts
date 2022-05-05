import * as apiPath from "../../paths";
import axiosClient from "../../axios";
import { toast } from "react-toastify";
import { ACCESSTOKEN, getListQuery } from "../../configs/setting";
import { IQueryList } from "../../interfaces/query";
import { ISchedule } from "../../models/CourseSchedule";
import { getCourseDetail } from "./CourseCreators";

const token = localStorage.getItem(ACCESSTOKEN) || "";

export const createCourseSchedule = (
  data: ISchedule,
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return async (dispatch: any) => {
    try {
      await axiosClient.post(
        apiPath.courseSchedulePaths.createCourseSchedule,
        data,
        token
      );
      dispatch(getCourseDetail(query));
      toast.success(success);
    } catch (error) {
      toast.error(err);
    }
  };
};

export const removeCourseSchedule = (
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return async (dispatch: any) => {
    try {
      await axiosClient.delete(
        apiPath.courseSchedulePaths.removeCourseSchedule,
        getListQuery(query as IQueryList),
        token
      );
      dispatch(getCourseDetail(query));
      toast.success(success);
    } catch (error) {
      toast.error(err);
    }
  };
};
