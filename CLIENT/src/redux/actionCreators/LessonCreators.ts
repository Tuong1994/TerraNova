import * as apiPath from "../../paths";
import axiosClient from "../../axios";
import { toast } from "react-toastify";
import { ACCESSTOKEN, getListQuery } from "../../configs/setting";
import { IQueryList } from "../../interfaces/query";
import { ILesson } from "../../models/Lesson";
import { getCourseDetail } from "./CourseCreators";

const token = localStorage.getItem(ACCESSTOKEN) || "";

export const createLesson = (
  data: ILesson,
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return async (dispatch: any) => {
    try {
      await axiosClient.post(apiPath.lessonPaths.createLesson, data, token);
      dispatch(getCourseDetail(query));
      toast.success(success);
    } catch (error) {
      toast.error(err);
    }
  };
};

export const removeLesson = (
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return async (dispatch: any) => {
    try {
      await axiosClient.delete(
        apiPath.lessonPaths.removeLesson,
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
