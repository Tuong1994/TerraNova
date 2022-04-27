import * as apiPath from "../../paths";
import axiosClient from "../../axios";
import { ECourseActionTypes } from "../actionTypes/CourseActionTypes";
import { IQueryList } from "../../interfaces/query";
import { Dispatch } from "redux";
import { getListQuery } from "../../configs/setting";
import { ICourse } from "../../models/Course";

export const getCategoryAndCourseList = () => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.coursePaths.getCategoryAndCourseList
      );
      dispatch({
        type: ECourseActionTypes.GET_CATEGORY_AND_COURSE_LIST,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCourseByCategory = (query: IQueryList) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.coursePaths.getCourseByCategory,
        getListQuery(query as IQueryList)
      );
      dispatch({
        type: ECourseActionTypes.GET_COURSE_BY_CATEGORY,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCourseDetail = (query: IQueryList) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.coursePaths.getCourseDetail,
        getListQuery(query as IQueryList)
      );
      dispatch({
        type: ECourseActionTypes.GET_COURSE_DETAIL,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createCourse = (data: ICourse) => {
  return async (dispatch: Dispatch) => {
    try {
      await axiosClient.post(apiPath.coursePaths.createCourse, data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCourse = (query: IQueryList, data: ICourse) => {
  return async (dispatch: Dispatch) => {
    try {
      await axiosClient.put(
        apiPath.coursePaths.updateCourse,
        getListQuery(query as IQueryList),
        data,
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeCourse = (query: IQueryList) => {
  return async (dispatch: Dispatch) => {
    try {
      await axiosClient.delete(
        apiPath.coursePaths.removeCourse,
        getListQuery(query as IQueryList)
      );
    } catch (error) {
      console.log(error);
    }
  };
};
