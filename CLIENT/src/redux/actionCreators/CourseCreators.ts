import * as apiPath from "../../paths";
import axiosClient from "../../axios";
import { ECourseActionTypes } from "../actionTypes/CourseActionTypes";
import { IQueryList } from "../../interfaces/query";
import { Dispatch } from "redux";
import { ACCESSTOKEN, getListQuery } from "../../configs/setting";
import { toast } from "react-toastify";
import actions from "../../configs/actions";

const token = localStorage.getItem(ACCESSTOKEN) || "";

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

export const getCourseList = (query: IQueryList, err?: string) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.openDataLoading);
    setTimeout(async () => {
      try {
        const result = await axiosClient.get(
          apiPath.coursePaths.getCourseList,
          getListQuery(query as IQueryList)
        );
        dispatch({
          type: ECourseActionTypes.GET_COURSE_LIST,
          payload: result.data,
        });
        dispatch(actions.closeDataLoading);
      } catch (error) {
        dispatch(actions.closeDataLoading);
        toast.error(err);
      }
    }, 1000);
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

export const getCourseDetail = (query: IQueryList, err?: string) => {
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
      toast.error(err);
    }
  };
};

export const createCourse = (data: any, success?: string, err?: string) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.post(apiPath.coursePaths.createCourse, data, token);
        dispatch(actions.closeButtonLoading);
        toast.success(success);
      } catch (error) {
        dispatch(actions.closeButtonLoading);
        toast.error(err);
      }
    }, 1000);
  };
};

export const updateCourse = (
  query: IQueryList,
  data: any,
  success?: string,
  err?: string
) => {
  return (dispatch: any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.put(
          apiPath.coursePaths.updateCourse,
          getListQuery(query as IQueryList),
          data,
          token
        );
        dispatch(getCourseDetail(query));
        dispatch(actions.closeButtonLoading);
        toast.success(success);
      } catch (error) {
        dispatch(actions.closeButtonLoading);
        toast.error(err);
      }
    }, 1000);
  };
};

export const removeCourse = (
  query: IQueryList,
  success?: string,
  err?: string,
  data?: any,
) => {
  return async (dispatch: any) => {
    try {
      await axiosClient.delete(
        apiPath.coursePaths.removeCourse,
        getListQuery(query as IQueryList),
        token,
        data
      );
      dispatch(getCourseList(query));
      toast.success(success);
    } catch (error) {
      toast.error(err);
    }
  };
};
