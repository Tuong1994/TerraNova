import { ECourseOrderActionTypes } from "../actionTypes/CourseOrderActionTypes";

interface CREATE_COURSE_ORDER {
    type: ECourseOrderActionTypes.CREATE_COURSE_ORDER,
    payload?: any
}

export type CourseOrderAction = CREATE_COURSE_ORDER;