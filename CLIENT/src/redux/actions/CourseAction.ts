import { ECourseActionTypes } from "../actionTypes/CourseActionTypes";

interface GET_CATEGORY_AND_COURSE_LIST {
  type: ECourseActionTypes.GET_CATEGORY_AND_COURSE_LIST;
  payload: any;
}

interface GET_COURSE_LIST {
  type: ECourseActionTypes.GET_COURSE_LIST;
  payload: any;
}
interface GET_COURSE_BY_CATEGORY {
  type: ECourseActionTypes.GET_COURSE_BY_CATEGORY;
  payload: any;
}

interface GET_COURSE_DETAIL {
  type: ECourseActionTypes.GET_COURSE_DETAIL;
  payload: any;
}

export type CourseAction =
  | GET_CATEGORY_AND_COURSE_LIST
  | GET_COURSE_LIST
  | GET_COURSE_BY_CATEGORY
  | GET_COURSE_DETAIL;
