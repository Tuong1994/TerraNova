import { ICourse, ICourseCategory } from "../../models/Course";
import { CourseAction } from "../actions/CourseAction";
import { ECourseActionTypes } from "../actionTypes/CourseActionTypes";

interface IStateDefault {
  categoryAndCourse: ICourseCategory[];
  coursesByCategory: {
    categoryName: {
      nameVN: string;
      nameENG: string;
    };
    courses: ICourse[];
  };
  courseDetail: ICourse;
}

const stateDefault: IStateDefault = {
  categoryAndCourse: [],
  coursesByCategory: {
    categoryName: {
      nameVN: "",
      nameENG: "",
    },
    courses: [],
  },
  courseDetail: {},
};

export const CourseReducer = (state = stateDefault, action: CourseAction) => {
  switch (action.type) {
    case ECourseActionTypes.GET_CATEGORY_AND_COURSE_LIST: {
      let newState = { ...state };
      newState.categoryAndCourse = action.payload;
      state = newState;
      return { ...state };
    }
    case ECourseActionTypes.GET_COURSE_BY_CATEGORY: {
      let newState = { ...state };
      newState.coursesByCategory = action.payload;
      state = newState;
      return { ...state };
    }
    case ECourseActionTypes.GET_COURSE_DETAIL: {
      let newState = { ...state };
      newState.courseDetail = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
