import { ECourseOrderActionTypes } from "../actionTypes/CourseOrderActionTypes";

interface CREATE_COURSE_ORDER {
    type: ECourseOrderActionTypes.CREATE_COURSE_ORDER,
}

export type CourseOrderAction = CREATE_COURSE_ORDER;